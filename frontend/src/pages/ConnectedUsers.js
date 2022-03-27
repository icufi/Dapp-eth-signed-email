import React from 'react';

import AccordionUsers from '../components/content/usersPage/AccordionUsers';
import DescriptionMain from '../components/content/usersPage/DescriptionMain';
import ImageBar from '../components/common/ImageBar';
import ValueProp from '../components/common/ValueProp';
import ContractDataUser from '../components/common/ContractDataUser';
import windowHook from '../shared/hooks/window-hook';

const ConnectedUsers = () => {
  const { width } = windowHook();
  return (
    <React.Fragment>
      <ContractDataUser title='Main Auction block' />
      <ValueProp valueText='Bonsai Mail' />
      {width > 1000 && <ImageBar />}
      <DescriptionMain />
      <AccordionUsers />
    </React.Fragment>
  );
};

export default ConnectedUsers;
