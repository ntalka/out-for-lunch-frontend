import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  TextField,
  ThemeProvider,
  FormLabel,
  Link,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { themeOptions } from '../../utils/ThemeOptions';
import { PopUp } from '../../components/StyledMui/PopUp';
import { SignUpUser } from '../../utils/User';
import './Register.css';
const theme = createTheme(themeOptions);

/*
Register for the website
Button elements for submitting, forgetting password and registering
 */

const Register = () => {
  const registerText =
    'Check your email after registration to finalize the process! \n';
  const [resMessage, setResMessage] = useState();
  const [openPopUp, setOpenPopUp] = useState(false);
  const [values, setValues] = useState({
    email: '',
    password: '',
    passwordAgain: '',
  });

  //handle change on email
  const handleChangeEmail = (email) => (event) => {
    setValues({ ...values, [email]: event.target.value });
  };

  //handle change on password fields
  const handleChangePassword = (password) => (event) => {
    setValues({ ...values, [password]: event.target.value });
  };
  const handleChangePasswordAgain = (passwordAgain) => (event) => {
    setValues({ ...values, [passwordAgain]: event.target.value });
  };

  // Input error checks
  const emailError =
    !values.email.includes(`@${process.env.REACT_APP_EMAIL_DOMAIN}`) &&
    values.email !== '';
  const passwordError = !(values.password === values.passwordAgain);
  const emptyCheck = values.password === '' && values.passwordAgain === '';

  // handle registration submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = await SignUpUser(data.get('email'), data.get('password'));
    setResMessage(message);
    setOpenPopUp(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <form onSubmit={handleSubmit}>
          {/* Placing text between borders */}
          <FormLabel
            style={{
              marginLeft: '105px',
              marginTop: '-20px',
              paddingLeft: '5px',
              paddingRight: '5px',
              width: '180px',
              backgroundColor: '#00173a',
              position: 'absolute',
              fontSize: '28px',
            }}
          >
            Registration
          </FormLabel>
          <Box
            id={'RegisterBox'}
            display='flex'
            flexDirection={'column'}
            maxWidth={400}
            alignItems='center'
            justifyContent='center'
            margin={'auto'}
            marginTop={3}
            padding={5}
            borderRadius={4}
            borderColor={'white'}
            border={1}
          >
            <TextField
              label='Email'
              id='email'
              value={values.email}
              name={'email'}
              type={'email'}
              required
              variant='outlined'
              placeholder={'Email'}
              margin='normal'
              onChange={handleChangeEmail('email')}
              helperText={
                emailError
                  ? `Email needs to be '@${process.env.REACT_APP_EMAIL_DOMAIN}'`
                  : ''
              }
              error={emailError}
            />

            <TextField
              id={'password'}
              name={'password'}
              type={'password'}
              label='Password'
              required
              values={values.password}
              variant='outlined'
              placeholder='Password'
              margin='normal'
              onChange={handleChangePassword('password')}
              helperText={passwordError ? 'Both passwords need to be same' : ''}
              error={passwordError}
            />

            <TextField
              id={'passwordAgain'}
              border={1}
              required
              label='Password again'
              name={'passwordAgain'}
              type={'password'}
              variant='outlined'
              placeholder={'Password again'}
              margin='normal'
              values={values.passwordAgain}
              onChange={handleChangePasswordAgain('passwordAgain')}
              helperText={passwordError ? 'Both passwords need to be same' : ''}
              error={passwordError}
            />
            <Typography
              sx={{ fontFamily: 'Quicksand' }}
              maxWidth={170}
              textAlign={'center'}
            >
              {registerText}
            </Typography>

            <Button
              id={'RegisterButton'}
              disabled={emailError || passwordError || emptyCheck}
              sx={{
                marginTop: 2,
              }}
              style={{
                minWidth: '120px',
              }}
              type={'submit'}
              variant='contained'
            >
              {' '}
              Register
            </Button>
            <Link href='/' variant='body2' style={{ marginTop: 15 }}>
              Back to Login
            </Link>

            {/* Popup after submit, displaying after response received
                     from the server -AK*/}
            {openPopUp && (
              <PopUp
                displayText={resMessage + '\n' + values.email}
                buttonText={'OK'}
                referTo={'/login'}
              />
            )}
          </Box>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
