import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import './TimeSelector.css';
const date = new Date();
const getTime = () => {
  let hour = date.getHours();
  let minutes = date.getMinutes();
  // dayjs(new Date()).hour(23).minute(59).second(59).millisecond(99)
  if (hour === 23 && minutes > 45)
    return {
      minTime: dayjs(date).hour(0).minute(0).second(0).millisecond(0),
      maxTime: dayjs(date).hour(0).minute(0).second(0).millisecond(0),
    };
  else if (minutes > 45) {
    minutes = 0;
    hour += 1;
  } else if (minutes > 30) {
    minutes = 45;
  } else if (minutes > 15) {
    minutes = 30;
  } else if (minutes > 0) {
    minutes = 15;
  } else {
    minutes = 0;
  }

  return {
    minTime: dayjs(date).hour(hour).minute(minutes).second(0).millisecond(0),
    maxTime: dayjs(date).hour(23).minute(59).second(0).millisecond(0),
  };
};
const { minTime, maxTime } = getTime();
const pickerOptions = {
  //maxTime +1m but < step - AK
  minTime,
  maxTime,
  minStep: 15,
};

function TimeSelector() {
  // State/value changes with initial times
  const [t1Value, t1SetValue] = React.useState(minTime);
  const [t2Value, t2SetValue] = React.useState(minTime.add(1, 'hour'));
  const [sliderValue, setSliderValue] = React.useState([660, 720]);
  updateSessionsStorage();
  //Handling Slider connecting it to the timepickers using activeThumb
  const handleSliderChange = (event, newValue, activeThumb) => {
    let newDate = dayjs(new Date()).hour(0).minute(newValue[activeThumb]);
    setSliderValue(newValue);

    // Null event indicates call from timepicker->no need to do twice -AK
    if (event === null) {
      return;
    }

    //fixing overlapping slider
    if (newValue[1] === newValue[0]) {
      t1SetValue(newDate);
      t2SetValue(newDate);
      return;
    }
    if (activeThumb === 0) {
      t1SetValue(newDate);
    } else {
      t2SetValue(newDate);
    }
    updateSessionsStorage();
  };

  function updateSessionsStorage() {
    // sessionStorage.setItem("start", t1Value.toISOString().slice(0,-1))
    // sessionStorage.setItem("end", t2Value.toISOString().slice(0,-1))
    sessionStorage.setItem('start', t1Value.toISOString().slice(0, -1));
    sessionStorage.setItem('end', t2Value.toISOString().slice(0, -1));
  }

  // Timer changes and slider linking
  // calls slider changes with null event to distinguish
  // TODO: remove duplicate code, add handling for start later than end etc
  const handleTimer1Change = (newValue) => {
    let newDate = dayjs(newValue).second(0).millisecond(0);
    const mins = newDate.minute() + newDate.hour() * 60;
    t1SetValue(newDate);
    handleSliderChange(null, [mins, sliderValue[1]], 1);
    updateSessionsStorage();
  };

  const handleTimer2Change = (newValue) => {
    let newDate = dayjs(newValue).second(0).millisecond(0);
    const mins = newDate.minute() + newDate.hour() * 60;
    t2SetValue(newDate);
    handleSliderChange(null, [sliderValue[0], mins], 0);
    updateSessionsStorage();
  };

  return (
    <div>
      <Typography variant={'h6'} textAlign={'center'} marginBottom={2}>
        Please set the start time of your lunch
      </Typography>
      <Grid container spacing={3} justifyContent={'center'}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid item xs={4}>
            <TimePicker
              closeOnSelect={true}
              minutesStep={pickerOptions.minStep}
              ampm={false}
              value={t1Value}
              onChange={handleTimer1Change}
              minTime={pickerOptions.minTime}
              maxTime={pickerOptions.maxTime}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className='timePicker'
                  label={'From'}
                  sx={{
                    svg: {
                      color: '#ffffff',
                    },
                    input: {
                      textAlign: 'center',
                      color: '#ffffff',
                    },
                  }}
                />
              )}
              sx={{ backgroundColor: '#00173a' }}
            />
          </Grid>

          <Grid item xs={4}>
            <TimePicker
              closeOnSelect={true}
              minutesStep={pickerOptions.minStep}
              ampm={false}
              value={t2Value}
              onChange={handleTimer2Change}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className='timePicker'
                  variant={'outlined'}
                  label={'To'}
                  sx={{
                    svg: {
                      color: '#ffffff',
                    },
                    input: {
                      textAlign: 'center',
                      color: '#ffffff',
                    },
                  }}
                />
              )}
              minTime={pickerOptions.minTime}
              maxTime={pickerOptions.maxTime}
              sx={{ backgroundColor: '#00173a' }}
            />
          </Grid>

          <Grid item alignItems={'center'} xs={10} width={'max-content'}>
            {/* <Slider
              id='timeSlider'
              value={sliderValue}
              defaultValue={1100}
              onChange={handleSliderChange}
              marks={marks}
              step={sliderOptions.minStep}
              min={sliderOptions.minTime}
              max={sliderOptions.maxTime}
            /> */}
          </Grid>
        </LocalizationProvider>
      </Grid>
    </div>
  );
}

export default TimeSelector;
