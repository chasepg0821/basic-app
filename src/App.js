import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import Home from './Pages/Home';

const App = () => {
  const { authStatus } = useAuthenticator(context => [context.authStatus]);

  // Use the value of authStatus to decide which page to render
 return (
    <>
      {authStatus === 'configuring' && 'Loading...'}
      {authStatus !== 'authenticated' ? <Authenticator /> : <Home />}
    </>
  );
};


