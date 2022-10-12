import React from 'react';
import Typography from "@mui/material/Typography";
import {
    Grid,
    Slider,
    TextField,
} from "@mui/material";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import {themeOptions} from "../Theme/ThemeOptions";
import "./TimeSelector.css";
import {
    validateTime
} from "@mui/x-date-pickers/internals/hooks/validation/useTimeValidation";




// Marks for the slider
const marks = [
    {
        value: 600,
        label: '10:00',
    },
    {
        value: 660,
        label: '11:00',
    },
    {
        value: 720,
        label: '12:00',
    },
    {
        value: 780,
        label: '13:00',
    },

    {
        value: 840,
        label: '14:00',
    },
]
const theme = themeOptions;

const pickerOptions={
    // max time +1 min so no invalid input @ full-hour -AK
    minTime:dayjs(new Date()).hour(10).minute(0),
    maxTime:dayjs(new Date()).hour(14).minute(1),
    minStep:15,
}

const sliderOptions={
    // Slider works in minutes
    minTime: 600,
    maxTime: 840,
    minStep: 15,
}

function valuetext(value) {
    return (value.toString().slice(0,2) + ":" + value.toString().slice(3));
}


function TimeSelector(){
    // State/value changes with initial times
    const [t1Value, t1SetValue] = React.useState(dayjs(new Date()).hour(11).minute(0));
    const [t2Value, t2SetValue] = React.useState(dayjs(new Date()).hour(12).minute(0));
    const [sliderValue, setSliderValue] = React.useState([660, 720]);

    //Handling Slider connecting it to the timepickers using activeThumb
    const handleSliderChange = (event, newValue, activeThumb) => {
        console.log(newValue);
        const index = activeThumb;
        let newDate = dayjs(new Date()).hour(0).minute(newValue[index]);
        setSliderValue(newValue);
        if(event === null){return;}
        if (activeThumb === 0) {
            t1SetValue(newDate);
        } else {
            t2SetValue(newDate);
        }
    };
    // TODO: IMPLEMENT TIMEPICKERS TO CHANGE SLIDER
    const handleTimer1Change = (newValue)=>{
        console.log(newValue.toString());
        let newDate = dayjs(newValue);
        const mins = newDate.minute()+newDate.hour()*60;
        console.log(mins);
        t1SetValue(newDate);
        handleSliderChange(null, [mins, sliderValue[1]], 1);
        //handleSliderChange(event, newValue, 0);
    }



    return(
        <div>
            <Typography variant={"h6"} textAlign={"center"} marginBottom={2}>
                Please set the start time of your lunch
            </Typography>
            <Grid container spacing={3} justifyContent={"center"} >
                <LocalizationProvider dateAdapter={AdapterDayjs}>

                    <Grid item xs={4}>
                        <TimePicker
                            minutesStep={pickerOptions.minStep}
                            ampm={false}
                            value={t1Value}
                            onChange={handleTimer1Change}
                            minTime={pickerOptions.minTime}
                            maxTime={pickerOptions.maxTime}

                            renderInput={(params) => (
                                <TextField {...params} className="timePicker"
                                           label={"From"}
                                           sx={{
                                               svg: {
                                                   color: '#ffffff' },
                                               input: {
                                                   textAlign: "center",
                                                   color: '#ffffff' },
                                           }}/>
                            )}
                            />
                    </Grid>

                    <Grid item xs={4}>
                        <TimePicker
                            minutesStep={pickerOptions.minStep}
                            ampm={false}
                            value={t2Value}
                            onChange={t2SetValue}
                            renderInput={(params) => (
                                <TextField {...params} className="timePicker"
                                           variant={"outlined"}
                                           label={"To"}
                                                       sx={{
                                                           svg: { color: '#ffffff' },
                                                           input: {
                                                               textAlign: "center",
                                                               color: '#ffffff' }}}/>
                            )}
                            minTime={pickerOptions.minTime}
                            maxTime={pickerOptions.maxTime}/>
                    </Grid>

                        <Grid item alignItems={"center"} xs={10} width={'max-content'}>
                            <Slider
                                id="timeSlider"
                                value={sliderValue}
                                defaultValue={1100}
                                getAriaValueText={valuetext}
                                onChange={handleSliderChange}
                                step={sliderOptions.minStep}
                                valueLabelDisplay="off"
                                marks={marks}
                                min={sliderOptions.minTime}
                                max={sliderOptions.maxTime}/>
                        </Grid>

                </LocalizationProvider>
            </Grid>
        </div>

    )}

export default TimeSelector;