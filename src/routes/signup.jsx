import { createFileRoute } from '@tanstack/react-router'
import { signUp } from "aws-amplify/auth"

export const Route = createFileRoute('/signup')({
  component: Signup
})

function Signup() {
  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: form.elements.username.value,
      password: form.elements.password.value,
      options: {
        userAttributes: {
          email: form.elements.email.value,
        },
      }
    });
    console.log(isSignUpComplete, nextStep)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="password">Username:</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <input type="submit" />
    </form>
  )
}