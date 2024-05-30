import { Button, Divider, Paper, Stack, TextField, Typography } from '@mui/material';
import { createFileRoute, useSearch } from '@tanstack/react-router';
import { signUp } from 'aws-amplify/auth';

export const Route = createFileRoute('/signup/confirm')({
  component: ConfirmSignup,
});

function ConfirmSignup() {
  const search = Route.useSearch();

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: form.elements.username.value,
      password: form.elements.password.value,
      options: {
        userAttributes: {
          email: form.elements.email.value,
        },
      },
    });
    console.log(isSignUpComplete, nextStep);
  }

  return (
    <Paper sx={{mt: 5}}>
      <Stack spacing={2} sx={{ p: '1rem'}}>
        <Typography variant="h2" component="h2" align='center'>Confirm Account</Typography>
        <Divider />
        <Typography variant='p' component='p' align='center'>
          Hi {search.user}! Looks like we need you to confirm your email to finish your account creation. We have sent an email to {search.dest} with a code. Please enter it below to continue.
        </Typography>
        <Divider />
        <TextField 
          value={'0'} 
          id='code' 
          label='Confirmation Code'
          // onChange={handleChangeFormValues} 
          // onBlur={checkValueExists}
          // helperText={errors.username ? errors.username : "Enter the username you signed up with"}
          // error={errors.username !== ""}
          required
          />
          <Button variant='contained' onClick={handleSubmit}>Confirm</Button>
      </Stack>
    </Paper>
  );
}
