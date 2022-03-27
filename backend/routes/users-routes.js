const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users-controllers');

const router = express.Router();

router.post(
  '/sendMail',
  [

    check('email').normalizeEmail().isEmail(),
  ],
  usersController.sendMail
);

module.exports = router;
