import React from 'react';
import ReactDOM from 'react-dom/client';
import { Authenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // default theme

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Authenticator.Provider>
      <View><App /></View>
    </Authenticator.Provider>
  </React.StrictMode>
);