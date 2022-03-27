import { createContext } from 'react';

export const AuthContext = createContext({
  provider: {},
  detect: () => {},
  currentAccount: '',
  walletData: [],

});
