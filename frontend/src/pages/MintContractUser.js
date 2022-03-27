import React from 'react'
import { useParams } from 'react-router-dom';

import MintForm from '../components/form/formik/MintForm';
import Accordion from '../components/content/usersPage/AccordionUsers';
import ContractDataUser from '../components/common/ContractDataUser';
import ValueProp from '../components/common/ValueProp';


const MintContractUser = () => {

const ownerAddress = useParams().ownerAddress;

console.log(ownerAddress);


    return (
      <React.Fragment>
        <ValueProp secondary valueText='Mint Bonsai Mail' />
        <ContractDataUser blue title='Email Content Here' />
        <MintForm address={ownerAddress}/>
        <Accordion />
      </React.Fragment>
    );
}

export default MintContractUser
