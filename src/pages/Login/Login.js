import React, { useState } from 'react';
import './Login.css';
import {
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  ThemeProvider,
  FormLabel,
} from '@mui/material';
import { themeOptions } from '../../utils/ThemeOptions';
// noinspection ES6CheckImport
import { Link as Link2, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../utils/Authenticate';
import { PopUp } from '../../components/StyledMui/PopUp';
import { LoginUser } from '../../utils/User';

const theme = createTheme(themeOptions);

/*
Login for the website. Contains elements for email and password submission
Button elements for submitting, forgetting password and registering
 */
const Login = () => {
  const { user, setUser } = useAuth();
  const [error, setError] = useState(null);
  //   const navigate = useNavigate();
  const location = useLocation();
  //   const textWidth = String(window.innerWidth / 4) + 'px';

  // Login submit for the user, provides it to the authenticator
  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const resp = await LoginUser(
      data.get('email'),
      data.get('password'),
      data.get('remember') !== null
    );
    if (resp.status === 400) {
      setError(resp.message);
    }
    setUser(sessionStorage.getItem('authToken'));
    if (user) {
      return <Navigate to={{ pathname: '/main', state: { from: location } }} />;
    }
  }

  if (user) {
    return <Navigate to={{ pathname: '/main', state: { from: location } }} />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div
            style={{
              position: 'relative',
            }}
          >
            <FormLabel className='loginText'>Please log in</FormLabel>
          </div>

          <Box
            id={'LoginBox'}
            display='flex'
            flexDirection={'column'}
            marginTop={3}
            maxWidth={400}
            alignItems={'center'}
            padding={5}
            borderRadius={4}
            borderColor={'white'}
            border={1}
          >
            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
              textAlign='center'
            >
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='email'
                label='Email'
                name='email'
                autoComplete='email'
                autoFocus
              />
              <TextField
                margin='normal'
                required
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
              <FormControlLabel
                name='remember'
                id='remember'
                control={<Switch value='remember' defaultChecked />}
                color='objective'
                label='Remember me'
                labelPlacement={'start'}
                sx={{ marginBottom: 2, marginTop: -1 }}
              />

              {/*Button grid starts here */}
              <Grid>
                <Grid item>
                  <Button
                    style={{ minWidth: '180px' }}
                    type='submit'
                    variant='contained'
                  >
                    Log In
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    sx={{ mt: 1, mb: 2 }}
                    style={{ minWidth: '120px' }}
                    type='link'
                    variant='contained'
                    component={Link2}
                    to='/register'
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {error && (
            <PopUp
              buttonText={'OK'}
              displayText={error}
              callback={() => setError(null)}
            />
          )}
        </Container>
      </ThemeProvider>
    );
  }
};

export default Login;
