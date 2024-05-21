import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useAuthenticator } from '@aws-amplify/ui-react';

export const Route = createFileRoute('/_protected/profile')({
  component: Profile,
})

function Profile() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <>
      <h2>Welcome, {user ? user.userId : "Loading..."}!</h2>
      <button onClick={signOut}>Sign Out</button>
    </>
  );
};
