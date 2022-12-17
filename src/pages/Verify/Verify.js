import React, { useEffect } from 'react';
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';
import { themeOptions } from '../../utils/ThemeOptions';
import { ReferPopUp } from '../../components/StyledMui/PopUp';

const theme = createTheme(themeOptions);

// Verify page for account, waits for server response and displays appropriate
// Popup message with refer to login page -AK
export default function Verify() {
  // Host and client url information
  const host = process.env.REACT_APP_SERVER;
  const tokenUrl = window.location.pathname;
  const fullUrl = window.location.href;

  // response data to be used and response status for displaying popup
  const [resMessage, setResMessage] = useState(null);
  const [resReceived, setResReceived] = useState(false);

  useEffect(() => {
    // declare the async data fetching function
    const verifyToken = async () => {
      try {
        const requestOptions = {
          method: 'POST',
          url: fullUrl,
        };
        await (await fetch(host + tokenUrl, requestOptions))
          .json()
          .then((res) => {
            setResMessage(res.message);
            // setting received status for popup display
            setResReceived(true);
          });
      } catch (e) {
        console.log(e);
      }
    };

    // call the function
    verifyToken()
      // make sure to catch any error
      .catch(console.error);
  }, [fullUrl, host, tokenUrl]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          {resReceived && (
            <ReferPopUp
              buttonText={'OK'}
              displayText={resMessage}
              referTo={'/login'}
            />
          )}
        </Container>
      </ThemeProvider>
    </div>
  );
}
