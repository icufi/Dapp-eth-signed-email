import React from 'react';

import MintForm from '../components/form/formik/MintForm'
import Accordion from '../components/content/usersPage/AccordionUsers';
import ContractDataUser from '../components/common/ContractDataUser'
import ValueProp from '../components/common/ValueProp'

const MintMail = () => {
  return (
    <React.Fragment>
      <ValueProp secondary valueText='Your Bonsai. Mint Mail Here.' />
      <ContractDataUser blue title='Email Content Here' />
      <MintForm />
      <Accordion />
    </React.Fragment>
  );
};

export default MintMail;
