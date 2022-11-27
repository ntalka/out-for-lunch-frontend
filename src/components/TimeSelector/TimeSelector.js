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
import "./TimeSelector.css";




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


const pickerOptions={
    //maxTime +1m but < step - AK
    minTime:dayjs(new Date()).hour(10).minute(0).second(0).millisecond(0),
    maxTime:dayjs(new Date()).hour(14).minute(1).second(0).millisecond(0),
    minStep:15
}

const sliderOptions={
    // Slider works in minutes, count starts from 00:00 -AK
    minTime: 600,
    maxTime: 840,
    minStep: 15,
}

function TimeSelector(){
    // State/value changes with initial times
    const [t1Value, t1SetValue] = React.useState(dayjs(new Date()).hour(11).minute(0));
    const [t2Value, t2SetValue] = React.useState(dayjs(new Date()).hour(12).minute(0));
    const [sliderValue, setSliderValue] = React.useState([660, 720]);
    updateSessionsStorage();
    //Handling Slider connecting it to the timepickers using activeThumb
    const handleSliderChange = (event, newValue, activeThumb) => {
        let newDate = dayjs(new Date()).hour(0).minute(newValue[activeThumb]);
        setSliderValue(newValue);

        // Null event indicates call from timepicker->no need to do twice -AK
        if(event === null){return;}

        //fixing overlapping slider
        if(newValue[1]===newValue[0]){
            t1SetValue(newDate)
            t2SetValue(newDate);
            return;
        }
        if (activeThumb === 0) {
            t1SetValue(newDate);
        } else {
            t2SetValue(newDate);
        }
        updateSessionsStorage()
    };

    function updateSessionsStorage(){
        // sessionStorage.setItem("start", t1Value.toISOString().slice(0,-1))
        // sessionStorage.setItem("end", t2Value.toISOString().slice(0,-1))
        sessionStorage.setItem("start", t1Value.toISOString().slice(0,-1))
        sessionStorage.setItem("end", t2Value.toISOString().slice(0,-1))
    }

    // Timer changes and slider linking
    // calls slider changes with null event to distinguish
    // TODO: remove duplicate code, add handling for start later than end etc
    const handleTimer1Change = (newValue)=>{
        let newDate = dayjs(newValue);
        const mins = newDate.minute()+newDate.hour()*60;
        t1SetValue(newDate);
        handleSliderChange(null, [mins, sliderValue[1]], 1);
        updateSessionsStorage()
    }

    const handleTimer2Change = (newValue)=>{
        let newDate = dayjs(newValue);
        const mins = newDate.minute()+newDate.hour()*60;
        t2SetValue(newDate);
        handleSliderChange(null, [sliderValue[0], mins], 0);
        updateSessionsStorage()
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
                            closeOnSelect={true}
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
                            sx={{backgroundColor:"#00173a"}}/>

                    </Grid>

                    <Grid item xs={4}>
                        <TimePicker
                            closeOnSelect={true}
                            minutesStep={pickerOptions.minStep}
                            ampm={false}
                            value={t2Value}
                            onChange={handleTimer2Change}
                            renderInput={(params) => (
                                <TextField {...params} className="timePicker"
                                           variant={"outlined"}
                                           label={"To"}
                                           sx={{
                                               svg: {
                                                   color: '#ffffff' },
                                               input: {
                                                   textAlign: "center",
                                                   color: '#ffffff' },
                                           }}/>
                            )}
                            minTime={pickerOptions.minTime}
                            maxTime={pickerOptions.maxTime}
                                    sx={{backgroundColor:"#00173a"}}/>

                    </Grid>

                        <Grid item alignItems={"center"} xs={10} width={'max-content'}>
                            <Slider
                                id="timeSlider"
                                value={sliderValue}
                                defaultValue={1100}
                                onChange={handleSliderChange}
                                marks={marks}
                                step={sliderOptions.minStep}
                                min={sliderOptions.minTime}
                                max={sliderOptions.maxTime}/>
                        </Grid>

                </LocalizationProvider>
            </Grid>
        </div>


    )}

export default TimeSelector;