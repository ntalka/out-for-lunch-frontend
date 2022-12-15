import React, { useState } from 'react';
import './Main.css';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Divider,
  Grid,
  ThemeProvider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { themeOptions } from '../../utils/ThemeOptions';
import TimeSelector from '../../components/TimeSelector/TimeSelector';
import { RenderDropDowns } from '../../components/GroupDropDown/GroupDropDown';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PopUp } from '../../components/StyledMui/PopUp';
import { joinRandomGroup } from '../../utils/Groups';

const theme = createTheme(themeOptions);

// Main page for displaying the restaurants / locations
export default function Main() {
  const [expanded, setExpanded] = useState(true);
  const [groups, setGroups] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Accordion id={'lunchTimePicker'} expanded={expanded}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon onClick={handleChange} />}
            >
              <Typography fontWeight={'bold'}> Lunch time picker </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <TimeSelector />
              <Button
                onClick={async function () {
                  const resp = await joinRandomGroup(
                    sessionStorage.getItem('start'),
                    sessionStorage.getItem('end')
                  );
                  if (resp && resp.message === 'No group to join') {
                    setError(resp.message);
                  } else {
                    navigate('/');
                  }
                }}
                disabled={groups.length === 0}
                id={'JoinRandom'}
                style={{ minWidth: 360 }}
              >
                Join random suitable group
              </Button>
            </AccordionDetails>
          </Accordion>
          <Divider
            style={{ width: '100%' }}
            justifycontent='center'
            variant='middle'
            sx={{ borderBottomWidth: 3 }}
          />
          <Typography sx={{ marginTop: 1, marginBottom: 3 }}>
            {' '}
            Groups of the day{' '}
          </Typography>
          <Grid container justifyContent={'center'}>
            <RenderDropDowns groups={groups} setGroups={setGroups} />
          </Grid>
          <Grid>
            <Button
              component={Link}
              to='/createcustom'
              id={'CreateCustom'}
              style={{ minWidth: 360 }}
              sx={{ marginTop: 1 }}
            >
              Create group
            </Button>
          </Grid>
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
