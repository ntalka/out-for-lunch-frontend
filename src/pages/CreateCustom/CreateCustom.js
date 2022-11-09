import React from 'react';
import { useState } from "react";


import {Autocomplete, Container, createTheme, CssBaseline, Divider, Grid, Slider, ThemeProvider} from "@mui/material";
import {themeOptions} from "../../utils/Theme/ThemeOptions";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";






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

    const [sliderValue, setSliderValue] = React.useState([660]);
    const[textfieldValue, settextfieldValue] = React.useState([660]);


    const handleSliderChange = (event, newValue, activeThumb) => {
        setSliderValue(newValue);
        settextfieldValue(newValue);

    }

    const handle2 = (event, newValue2) =>{

    }

    return (
        <ThemeProvider theme={theme}>

            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Typography> Please set the start time of your lunch</Typography>
                <TextField value={sliderValue}
                onChange={handle2}>
                </TextField>
                <Grid item alignItems={"center"}  >
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

                <Divider style={{width:'90%'}}  justifycontent="center" variant="middle" sx={{marginBottom: 1, marginTop: 5, borderBottomWidth: 3}}/>
                <Grid   container spacing={0} justifyContent={"center"}>
                    <Typography sx={{marginBottom: 3, marginTop: 2, fontSize: 20}}> Please Choose a restaurant</Typography>
                    <Autocomplete
                        disablePortal
                        variant={"outlined"}
                        id="restaurantBar"
                        options={data}
                        /* Currenly value on console */
                        onChange={(event, value) => console.log(value)}
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
                <Divider style={{width:'90%'}}  justifycontent="center" variant="middle" sx={{marginBottom: 5, marginTop: 5, borderBottomWidth: 3}}/>
            </Container>
        </ThemeProvider>

    );

};


export default CreateCustom;