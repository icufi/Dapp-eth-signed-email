import React, { useContext, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Grid, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


import TextFieldFormik from './components/TextField';

import ButtonFormik from './components/Button';
import { useHttpClient } from '../../../shared/hooks/http-hook';
import { AuthContext } from '../../../shared/context/auth-context';

import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  root: {
    backgroundColor: (props) =>
      props.blue
        ? theme.palette.background.blue
        : theme.palette.background.secondary,
    height: 600,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  quantity: '',
};

const FORM_VALIDATION_SCHEMA = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Email is invalid').required('Required'),

  message: Yup.string(),
});

const SendFormik = () => {
  const auth = useContext(AuthContext);
  const [status, setStatus] = useState({});


  const classes = useStyles();
  const { sendRequest, isLoading, error, clearError } = useHttpClient();

  const onSubmitHandler = async (event) => {
    const msgText = event.message;

    console.log('address', auth.provider.selectedAddress);
    try {
      const from = auth.provider.selectedAddress;
      const msg = `0x${Buffer.from(msgText, 'utf8').toString('hex')}`;

      console.log('msgEncrypt', msg);
      const sign = await window.ethereum.request({
        method: 'personal_sign',
        params: [msg, from, 'Example password'],
      });
      console.log('signature', sign);
      console.log('message', event.message);
      console.log('msg', msg);
      const response = await sendRequest(
        'http://localhost:5000/api/users/sendMail',
        'POST',
        JSON.stringify({
          firstName: event.firstName,
          lastName: event.lastName,
          email: event.email,
          message: event.message,
          sign: sign,
          senderAddress: from,
          msgEncrypt: msg,
        }),
        {
          'Content-Type': 'application/json',
        }
      )

      console.log(response);
      setStatus(response);
    } catch (err) {
      console.error(err);

    }




  };



  if (isLoading) {
     return (
       <Grid className={classes.root} container>
         <Grid className={classes.title} item xs={12}>
           <LoadingSpinner />
         </Grid>
       </Grid>
     );
  }
  if (error) {
    return (
      <Grid className={classes.root} container>
        <Grid className={classes.title} item xs={12}>
          <Typography variant='h4'>Email error. Please try again!</Typography>
        </Grid>
      </Grid>
    );
  }
  if (status.code === 201) {
    return (
      <Grid className={classes.root} container>
        <Grid className={classes.title} item xs={12}>
          <Typography variant='h4'>Email sent successfully!</Typography>
        </Grid>
      </Grid>
    );
  }



  return (
    <Grid  container>
      <Grid item xs={12}>
        <Container>
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION_SCHEMA}
              onSubmit={onSubmitHandler}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your Details</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <TextFieldFormik name='firstName' label='First Name' />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldFormik name='lastName' label='Last Name' />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldFormik name='email' label='Email' />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldFormik name='quantity' label='quantity' />
                  </Grid>

                  <Grid item xs={12}>
                    <TextFieldFormik
                      name='message'
                      label='Message'
                      multiline={true}
                      rows={6}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <ButtonFormik>Submit Form</ButtonFormik>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default SendFormik;
