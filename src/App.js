import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';

import Home from "./Pages/Home";

const App = () => {
  const { route, authStatus } = useAuthenticator(context => [context]);

  // Use the value of route to decide which page to render
  return (
    <>
      {authStatus === 'configuring' && 'Loading...'}
      {route === 'authenticated' ? <Home /> : <Authenticator />}
    </>
  );
};

export default App;


