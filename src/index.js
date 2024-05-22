import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@aws-amplify/ui-react/styles.css'; 
import conf from './aws-exports'
import { RecoilRoot } from 'recoil';

Amplify.configure(conf);

const queryClient = new QueryClient()

// Set up a Router instance
const router = createRouter({
  routeTree,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Authenticator.Provider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Authenticator.Provider>
    </RecoilRoot>
  </React.StrictMode>
);