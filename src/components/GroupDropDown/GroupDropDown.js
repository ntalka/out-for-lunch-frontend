import React, { useEffect, useState, useRef } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, Grid, IconButton, Stack, Switch } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

//Icon imports
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import { ParticipantList } from '../ParticipantList/ParticipantList';
import {
  deleteGroup,
  GetAllGroups,
  joinGroup,
  leaveGroup,
} from '../../utils/Groups';
import { ISOtoLocalHours } from '../../utils/TimeUtils';
import DeleteIcon from '@mui/icons-material/Delete';

function EmbedLink(placeId = 'ChIJuy6UbDjfjkYRmI04K3dwVcs') {
  return (
    'https://www.google.com/maps/embed/v1/place?' +
    'key=' +
    process.env.REACT_APP_GOOGLE_API_KEY +
    '&q=place_id:' +
    placeId +
    '&zoom=14'
  );
}

function EmbedCoordinates(coordinates = '61.449801,23.856506') {
  return (
    'https://www.google.com/maps/embed/v1/view?' +
    'key=' +
    process.env.REACT_APP_GOOGLE_API_KEY +
    '&center=' +
    coordinates +
    '&zoom=14'
  );
}

function MapIframe({ placeId, coordinates }) {
  if (!(String(placeId) === '0')) {
    return (
      <div align={'center'}>
        <iframe
          id={'embeddedMap'}
          title={'Restaurant map location'}
          src={EmbedLink(placeId)}
          width='300'
          height='300'
          frameBorder='0'
          style={{ border: 0 }}
          aria-hidden='false'
          tabIndex='0'
        />
      </div>
    );
  } else {
    return (
      <div align={'center'}>
        <iframe
          id={'embeddedMap'}
          title={'office map location'}
          src={EmbedCoordinates(coordinates)}
          width='300'
          height='300'
          frameBorder='0'
          style={{ border: 0 }}
          aria-hidden='false'
          tabIndex='0'
        />
      </div>
    );
  }
}

// Returns single dropdownmenu component as a grid item xs=11. Requires vars defined.
// - AK
export function SingleGroupDropDown({ groupData }) {
  const dropMenu = useRef(null);
  const dropMenuButton = useRef(null);
  const [open, setOpen] = useState(groupData['joined']);
  const [joined, setJoined] = useState(groupData['joined']);
  const [color, setColor] = useState(joined ? null : '#e3dbd0');
  const navigate = useNavigate();
  const [userInfo] = React.useState(
    !sessionStorage.getItem('userInfo')
      ? localStorage.getItem('userInfo')
      : sessionStorage.getItem('userInfo')
  );
  let restaurantName;
  let officeLocation;
  const groupId = groupData['id'];
  //const officeId = groupData["officeId"];
  if (groupData['restaurant'] === null) {
    officeLocation = JSON.parse(userInfo)['officeLocation'];
    restaurantName = 'office';
  } else {
    restaurantName = groupData['restaurant']['name'];
  }
  const restaurantId = groupData['restaurantId'];
  const nParticipants = groupData['groupMember'].length;
  const time = ISOtoLocalHours(groupData['time']);

  function toggleOpen() {
    setOpen(!open);
  }

  // To close all other dropdown menus
  const closeOpenDropDown = (e) => {
    if (dropMenu.current && open && !dropMenu.current.contains(e.target)) {
      setOpen(false);
    }
  };

  // Handling joining and leaving particular group
  function handleJoin() {
    if (!joined) {
      joinGroup(groupId).then(() => {
        setJoined(true);
        sessionStorage.setItem('myGroup', JSON.stringify(groupData));
      });
    } else {
      leaveGroup(groupId).then(() => {
        setJoined(false);
        sessionStorage.removeItem('myGroup');
      });
    }
    setJoined(!joined);
  }

  // Async func to communicate jjoining with the backend

  // sync joining switches and colours
  useEffect(() => {
    const joinedThis = joined;
    setJoined(joinedThis);
    if (joinedThis) {
      setColor('#80a4ff');
    } else {
      setColor('#e3dbd0');
    }
  }, [joined]);

  // Closing dropdown menu on clicks outside / clicking other button
  useEffect(() => {
    document.addEventListener('mouseup', closeOpenDropDown);
    return () => {};
  });

  return (
    <Grid item xs={11} marginBottom={0.5} ref={dropMenu}>
      <Button
        variant={'contained'}
        ref={dropMenuButton}
        fullWidth={true}
        onClick={toggleOpen}
        //BG colour will depend on join status, currently nulled
        sx={{
          color: 'black',
          backgroundColor: color,
        }}
      >
        {/*Gridded button info contents to assure easier time
                        aligning via proportions -AK */}
        <Grid container>
          <Grid item xs={6}>
            <Typography align={'left'} color={'black'}>
              {restaurantName}{' '}
            </Typography>
          </Grid>

          <Grid item xs={1}>
            <AccessTimeIcon />
          </Grid>

          <Grid item xs={2}>
            <Typography color={'black'}>{time} </Typography>
          </Grid>

          <Grid item xs={1}>
            <PeopleAltIcon />
          </Grid>

          <Grid item xs={1}>
            <Typography align={'left'} color={'black'}>
              {nParticipants}{' '}
            </Typography>
          </Grid>

          <Grid item xs={1}>
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Grid>
        </Grid>
      </Button>

      {/*Contents of the dropdown menu, hidden if !open */}
      {open && (
        <Box marginTop={2}>
          {/*Group Joining*/}
          <Stack direction={'row'} justifyContent='center'>
            <Typography variant={'h6'} align={'center'}>
              Join this Group?
              <Switch checked={joined} onChange={handleJoin}></Switch>
              <IconButton
                onClick={function () {
                  deleteGroup(groupId, joined);
                  navigate('/');
                }}
                aria-label='delete'
                color='error'
                size={'large'}
                style={{ bottom: 1, right: -30 }}
              >
                <DeleteIcon />
              </IconButton>
            </Typography>
          </Stack>

          <Divider
            variant={'middle'}
            sx={{
              margin: 1,
              borderBottomWidth: 2,
              backgroundColor: '#e3dbd0',
            }}
          />

          {/*Google Map Embed*/}
          <MapIframe placeId={restaurantId} coordinates={officeLocation} />
          <Divider
            variant={'middle'}
            sx={{
              margin: 1,
              borderBottomWidth: 2,
              backgroundColor: '#e3dbd0',
            }}
          />

          {/*Participant info*/}
          <Typography variant={'h6'} align={'center'}>
            Participants
          </Typography>

          <Grid marginY={2} container justifyContent={'center'} spacing={0}>
            <ParticipantList key={'participantList'} groupId={groupId} />
          </Grid>
        </Box>
      )}
    </Grid>
  );
}

// Dynamically create and return dropdown menus from map
function AllGroupDropDown({ groups }) {
  sessionStorage.removeItem('myGroup');
  return groups.map((value) => {
    const id = value['id'];
    if (value['joined']) {
      sessionStorage.setItem('myGroup', JSON.stringify(value));
    }

    return <SingleGroupDropDown key={id} groupData={value} />;
  });
}

// function to render DropDowns so that data is fetched
// and components are shown after loading
export function RenderDropDowns() {
  const [didMount, setDidMount] = useState(false);
  const [groups, setGroups] = useState();

  useEffect(() => {
    if (!didMount) {
      GetAllGroups().then(() => {
        setDidMount(true);
        setGroups(JSON.parse(sessionStorage.getItem('groups')));
      });
    }
  });

  return <>{groups && <AllGroupDropDown groups={groups} />}</>;
}
