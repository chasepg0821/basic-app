import * as React from 'react';
import { Navigate, Outlet, createFileRoute } from '@tanstack/react-router';
import { useAuthenticator } from '@aws-amplify/ui-react';

export const Route = createFileRoute('/_protected')({
  component: ProtectedComponent,
});

function ProtectedComponent() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  // Use the value of authStatus to decide which page to render
  return (
    <>
      {authStatus === 'configuring' && 'Loading...'}
      {authStatus !== 'authenticated' ? <Navigate to="/signin" /> : <Outlet />}
    </>
  );
}
