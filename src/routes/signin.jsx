import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Divider, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { resendSignUpCode, signIn } from 'aws-amplify/auth';
import { useState } from 'react';

export const Route = createFileRoute('/signin')({
  component: Signin,
});

function Signin() {
  const [formValues, setFormValues] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    form: ""
  })

  const handleChangeFormValues = e => {
    e.preventDefault();
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    })
  }

  const checkValueExists = e => {
    e.preventDefault();
    if (!e.target.value) {
      setErrors({
        ...errors,
        [e.target.id]: `${e.target.id} is a required field`
      })
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    signIn(formValues)
      .then(({nextStep}) => {
        if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
          resendSignUpCode({
            username: formValues.username
          }).then((resp) => {
            navigate({to:'/signup/confirm', search: { user: formValues.username, dest: resp.destination }})
          })
        } else {
          navigate({to: '/profile'})
        }
      })    
  }

  return (
    <Paper sx={{mt: 5}}>
      <Stack spacing={2} sx={{ p: '1rem'}}>
        <Typography variant="h2" component="h2" align='center'>Sign In</Typography>
        <Divider />
        <TextField 
          value={formValues.username} 
          id='username' 
          label='Username'
          onChange={handleChangeFormValues} 
          onBlur={checkValueExists}
          helperText={errors.username ? errors.username : "Enter the username you signed up with"}
          error={errors.username !== ""}
          required
          />
          <FormControl error={errors.password !== ""} variant="outlined">
            <InputLabel required htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id='password' 
              label='Password' 
              type={showPassword ? 'text' : 'password'}
              onChange={handleChangeFormValues} 
              onBlur={checkValueExists} 
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              required
            />
            <FormHelperText>{errors.password ? errors.password : "Enter your password"}</FormHelperText>
          </FormControl>
          <Button variant='contained' onClick={handleSubmit}>Sign In</Button>
      </Stack>
    </Paper>
  );
}
