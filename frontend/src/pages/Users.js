import React from 'react';

import AccordionUsers from '../components/content/usersPage/AccordionUsers';
import DescriptionMain from '../components/content/usersPage/DescriptionMain';
import ContractDataPublic from '../components/common/ContractDataPublic';
import ImageBar from '../components/common/ImageBar';
import ValueProp from '../components/common/ValueProp';
import windowHook from '../shared/hooks/window-hook';

const Users = () => {
  const { width } = windowHook();
  console.log('width:', width);
  console.log('friday')
  return (
    <React.Fragment>
      <ContractDataPublic title='Main Auction block' />
      <ValueProp valueText='Bonsai Mail' />
      {width > 1000 && <ImageBar />}
      <DescriptionMain />
      <AccordionUsers />
    </React.Fragment>
  );
};

export default Users;
