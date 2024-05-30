import { createFileRoute } from '@tanstack/react-router';
import { resendSignUpCode, signIn } from 'aws-amplify/auth';

export const Route = createFileRoute('/signin')({
  component: Signin,
});

function Signin() {
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    // ... validate inputs
    const { nextStep } = await signIn({
      username: form.elements.username.value,
      password: form.elements.password.value,
    });
    if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
      await resendSignUpCode({
        username: form.elements.username.value,
      });
    }
    console.log(nextStep);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Username:</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <input type="submit" />
    </form>
  );
}
