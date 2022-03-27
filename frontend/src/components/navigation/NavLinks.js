import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../shared/context/auth-context';
import './NavLinks.css';

const NavLinks = (props) => {
  const auth = useContext(AuthContext);


  return (
    <ul className='nav-links'>
      {auth.provider.selectedAddress && (
        <li>
          <NavLink to='/mail' exact>
            Mail
          </NavLink>
        </li>
      )}
      {auth.provider.selectedAddress && (
        <li>
          <NavLink to='/mint' exact>
            Mint
          </NavLink>
        </li>
      )}
      {auth.provider.selectedAddress ? (
        ''
      ) : (
        <li>
          <NavLink onClick={auth.checkWalletIsConnected} to='/' exact>
            Connect Wallet
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
