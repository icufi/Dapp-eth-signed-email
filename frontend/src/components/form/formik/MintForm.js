import React, { useContext, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Grid, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Web3 from 'web3';

import TextFieldFormik from './components/TextField';

import ButtonFormik from './components/Button';

import { AuthContext } from '../../../shared/context/auth-context';
import bonsaiTokenBuild from '../../../contracts/BonsaiToken0xC9.json';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  quantity: '',
};

const FORM_VALIDATION_SCHEMA = Yup.object().shape({

  quantity: Yup.number().max(2, 'No more than 2 can be minted at a time.').typeError('Invalid Number').required('Required'),


});


// uses formik to create a form
const MintForm = (props) => {
  const auth = useContext(AuthContext);
  const [receipt, setReceipt] = useState([]);

  const ownerAddress = props.address

  console.log(ownerAddress)


  const classes = useStyles();

  const onSubmitHandler = async (event) => {
    const web3 = new Web3(auth.provider);
    const networkId = await web3.eth.net.getId();
    console.log('submit Handler:', auth.provider.selectedAddress);

    const nftFactory = new web3.eth.Contract(
      bonsaiTokenBuild.abi,
      bonsaiTokenBuild.networks[networkId].address
    );

    const value = event.contribution * 0.02;
    console.log('value:', value);

    const payment = web3.utils.toWei(value.toString(), 'ether');
    console.log(payment);

    await nftFactory.methods
      .mint(event.contribution)
      .send({
        from: auth.provider.selectedAddress,
        value: payment,
      })
      .then(function (receipt) {

        setReceipt([receipt]);
        console.log(receipt);
      });

    event.contribution = '';
  };

  return (
    <Grid container>
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
                    <Typography variant='h4'>Bonsai Stamp NFT</Typography>
                  </Grid>


                  <Grid item xs={12}>
                    <TextFieldFormik
                      name='quantity'
                      label='Quantity? (maximum 2)'
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <ButtonFormik>Mint!</ButtonFormik>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>mint cost:  .02 ether</Typography>
                  </Grid>
                  {receipt.map((receipt) => (
                    <Grid item xs={12}>
                      <Typography>Success!</Typography>
                      <Typography>Receipt:</Typography>
                      <Typography>{receipt.blockHash}</Typography>
                      <Typography>{receipt.blockNumber}</Typography>
                      <Typography>{receipt.from}</Typography>
                    </Grid>
                  ))}
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default MintForm;
