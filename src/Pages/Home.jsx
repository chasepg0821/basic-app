import { useAuthenticator } from '@aws-amplify/ui-react';

const Home = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <>
      <h2>Welcome, {user.userId}!</h2>
      <button onClick={signOut}>Sign Out</button>
    </>
  );
};

export default Home;
