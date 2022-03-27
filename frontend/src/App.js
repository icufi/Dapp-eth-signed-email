import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';


import Users from './pages/Users';
import ConnectedUsers from './pages/ConnectedUsers';
import MainNavigation from './components/navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';
import SendMail from './pages/SendMail';
import MintMail from './pages/MintMail';
import Footer from './components/navigation/Footer';


import theme from './Styles';

const App = () => {
  const {
    checkWalletIsConnected,
    provider,
    detect,
    currentAccount,
    walletData,

  } = useAuth();


  detect();


  let routes;



  if (window.ethereum.selectedAddress) {
    routes = (
      <Switch>
        <Route path='/' exact>
          <ConnectedUsers />
        </Route>
        <Route path='/mail' exact>
          <SendMail />
        </Route>
        <Route path='/mint' exact>
          <MintMail />
        </Route>
        <Redirect to='/' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path='/' exact>
          <Users />
        </Route>
        <Redirect to='/' />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        checkWalletIsConnected,
        provider,
        detect,
        currentAccount,
        walletData,
      }}
    >
      <ThemeProvider theme={theme}>
        <Router>
          <MainNavigation />
          <main>{routes}</main>
          <Footer />
        </Router>
      </ThemeProvider>
    </AuthContext.Provider>
  );
};

export default App;
