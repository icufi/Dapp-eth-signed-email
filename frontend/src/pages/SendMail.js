import React from 'react';

import SendForm from '../components/form/formik/SendForm';
import Accordion from '../components/content/usersPage/AccordionUsers';
import ValueProp from '../components/common/ValueProp';

const SendMail = () => {
  return (
    <React.Fragment>
      <ValueProp secondary valueText='Bonsai Mail' />
      <SendForm />
      <Accordion />
    </React.Fragment>
  );
};

export default SendMail;
