const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const { recoverPersonalSignature } = require('eth-sig-util');

const HttpError = require('../models/http-error');
const Email = require('../models/email');

const sendMail = async (req, res, next) => {
  const errors = validationResult(req);

  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });


  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  try {
    const from = req.body.senderAddress;
    const msg = `0x${Buffer.from(req.body.message, 'utf8').toString('hex')}`;
    const sign = req.body.sign;
    const recoveredAddr = recoverPersonalSignature({
      data: msg,
      sig: sign,
    });
    if (recoveredAddr === from) {
      const createdEmail = new Email({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        message: req.body.message,
        email: req.body.email,
        sign: req.body.sign,
        senderAddress: req.body.senderAddress,
        msgEncrypt: req.body.msgEncrypt,
      });

      try {
        await createdEmail.save();
        await transporter.sendMail({
          from: 'Rich@richie.com',
          to: 'Successmessage@test.com',
          subject: 'New message from SUCCESS',
          html: `<h1>New message from ${req.body.firstName} ${req.body.lastName}</h1>
          <p>${req.body.message}</p>
          <p>Buy my NFT at https://surgeonfishcbd.com/mint/${req.body.senderAddress}</p>`,
        });

        res.status(201).json({ message: 'Email sent successfully', code: 201 });
      } catch (err) {
        const error = new HttpError(
          'Email failed to send, please try again.',
          500
        );
        return next(error);
      }
    } else {
      console.log(
        `SigUtil Failed to verify signer when comparing ${recoveredAddr} to ${from}`
      );
      console.log(`Failed comparing ${recoveredAddr} to ${from}`);
      const error = new HttpError('SigUtil Failed to verify signer.', 500);
      return next(error);
    }
  } catch (err) {
    console.log(err);
    const error = new HttpError('Email and DB process failed.', 500);
    return next(error);

  }
};

exports.sendMail = sendMail;
