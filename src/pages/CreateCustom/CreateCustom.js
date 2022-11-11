import React from 'react';
import {
    Autocomplete, Button,
    Container,
    createTheme,
    CssBaseline,
    Divider,
    Grid,
    Slider,
    ThemeProvider
} from "@mui/material";
import {themeOptions} from "../../utils/Theme/ThemeOptions";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {TimePicker} from "@mui/x-date-pickers/TimePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import {Link} from "react-router-dom";







const theme = createTheme(themeOptions);


const data = [
    { label: "Ravintola Tampella"},
    { label: "Sasor - Restaurant & Winebar" },
    { label:  "Rioni Tampere"},
    { label: "Viikinkiravintola Harald" },
    { label: "Ravintola Kajo" },
    { label: "testi" },
    { label: "testi2" }
];

const pickerOptions={
    // max/min time +1/-1 min so no invalid input @ full-hour -AK
    minTime:dayjs(new Date()).hour(9).minute(59),
    maxTime:dayjs(new Date()).hour(14).minute(1),
    minStep:15,
}


const sliderOptions={
    // Slider works in minutes, count starts from 00:00 -AK
    minTime: 600,
    maxTime: 840,
    minStep: 15,
}

function valuetext(value) {
    return (value.toString().slice(0,2) + ":" + value.toString().slice(3));
}


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



const CreateCustom = () => {
    const [tValue, tSetValue] = React.useState(dayjs(new Date()).hour(11).minute(0));
    const [sliderValue, setSliderValue] = React.useState(660);
    const [autoValue, setAutoValue] = React.useState([]);

    // handle autocomplete change to get value
    const handleAutoChange = (event, value) => setAutoValue(value);

    //handle slider change
    const handleSliderChange = (event, newValue) => {
        let newDate = dayjs(new Date()).hour(0).minute(newValue);
        setSliderValue(newValue);
        tSetValue(newDate);
    };

    //handle time change
    const handleTimerChange = (newValue)=>{
        let newDate = dayjs(newValue);
        const mins = newDate.minute()+newDate.hour()*60;
        tSetValue(newDate);
        handleSliderChange(null, mins);
    }

    // currently printing time and restaurant on console
    const handleOk = () =>{
        console.log(tValue, autoValue);
    }


    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>

                    <Grid container spacing={0} justifyContent={"center"} >
                        <Typography  sx={{ marginBottom: 4, marginTop: 2, fontSize: 20}}> Please set the start time of your lunch</Typography>
                        <TimePicker
                            minutesStep={pickerOptions.minStep}
                            ampm={false}
                            value={tValue}
                            onChange={handleTimerChange}
                            minTime={pickerOptions.minTime}
                            maxTime={pickerOptions.maxTime}

                            renderInput={(params) => (
                                <TextField {...params} className="timePicker"
                                           label={"At"}
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

                <Grid item alignItems={"center"} xs={9} >
                    <Slider
                        sx={{marginTop: 2}}
                        id="timeSlider"
                        value={sliderValue}
                        defaultValue={1100}
                        track={false}
                        getAriaValueText={valuetext}
                        onChange={handleSliderChange}
                        step={sliderOptions.minStep}
                        valueLabelDisplay="off"
                        marks={marks}
                        min={sliderOptions.minTime}
                        max={sliderOptions.maxTime}/>
                </Grid>

                <Divider style={{width: '100%', maxWidth: 360}}  justifycontent="center" variant="middle" sx={{marginBottom: 1, marginTop: 5, borderBottomWidth: 3}}/>

                <Grid   container spacing={0} justifyContent={"center"}>
                    <Typography sx={{marginBottom: 3, marginTop: 2, fontSize: 20}}> Please Choose a restaurant</Typography>
                    <Autocomplete
                        disablePortal
                        variant={"outlined"}
                        id="restaurantBar"
                        options={data}
                        /* Currenly value on console */
                        onChange={handleAutoChange}
                        sx={{  "& .MuiOutlinedInput-root": {
                                "& > fieldset": {
                                    borderColor: "#ffffff",
                                    borderRadius : 3},
                            },
                            width: 320,
                            svg: {
                                color: '#ffffff' },
                            input: {
                                color: '#ffffff' },
                        }}
                        renderInput={(params) => <TextField {...params} label="Restaurant" />}
                    />
                </Grid>

                <Divider style={{width: '100%', maxWidth: 360}}  justifycontent="center" variant="middle" sx={{marginBottom: 2, marginTop: 5, borderBottomWidth: 3}}/>

                <Grid container spacing={1} align="center" direction="row">

                    <Grid item xs={6} >
                    <Button
                        style={{minWidth: 100}}
                        id={"okButton"}
                        onClick={handleOk}
                        component={Link} to="/main"
                        sx={{ fontSize: 11.5, fontWeight: "bold", color: "black", borderRadius: 2,
                            backgroundColor: theme.palette.secondary.dark,
                            '&:hover':{backgroundColor: theme.palette.primary.dark,
                                color: theme.palette.primary.contrastText,
                            }}}> Ok</Button>
                    </Grid>

                    <Grid item xs={6}>
                        <Button style={{minWidth: 100}}
                            id={"cancelButton"}
                            component={Link} to="/main"
                            sx={{ fontSize: 11.5, fontWeight: "bold", color: "black", borderRadius: 2,
                                backgroundColor: theme.palette.secondary.dark,
                                '&:hover':{backgroundColor: theme.palette.primary.dark,
                                    color: theme.palette.primary.contrastText,
                                }}}> Cancel</Button>
                    </Grid>
                </Grid>

            </Container>
        </LocalizationProvider>
        </ThemeProvider>

    );

};


export default CreateCustom;