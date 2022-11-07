import React from 'react';
import { useState } from "react";


import {Container, createTheme, CssBaseline, Divider, Grid, Slider, ThemeProvider} from "@mui/material";
import {themeOptions} from "../../utils/Theme/ThemeOptions";
import SearchBar from "./SearchBar";
import Typography from "@mui/material/Typography";






const theme = createTheme(themeOptions);

const filterData = (query, data) => {
    if (!query) {
        return data;
    } else {
        return data.filter((d) => d.toLowerCase().includes(query));
    }
};

const data = [
    "Ravintola Tampella",
    "Sasor - Restaurant & Winebar",
    "Rioni Tampere",
    "Viikinkiravintola Harald",
    "Ravintola Kajo",
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
    const [searchQuery, setSearchQuery] = useState("");
    const dataFiltered = filterData(searchQuery, data);
    const [sliderValue, setSliderValue] = React.useState([660]);


    const handleSliderChange = (event, newValue, activeThumb) => {
        setSliderValue(newValue);

    }

    return (
        <ThemeProvider theme={theme}>

            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Typography> Please set the start time of your lunch</Typography>


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
                <Divider style={{width:'100%'}}  justifycontent="center" variant="middle" sx={{marginBottom: 5, marginTop: 5, borderBottomWidth: 3}}/>
            <Grid container spacing={0} justifyContent={"center"} >
                <Grid   item xs={9.2} alignContent={"center"}>
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                </Grid>
                <Grid item xs={7}>
                    <div style={{ padding: 3 }}>
                        {dataFiltered.map((d) => (
                            <div
                                className="text"
                                style={{
                                    padding: 5,
                                    justifyContent: "normal",
                                    fontSize: 20,
                                    color: "white",
                                    margin: 1,
                                    width: "250px",
                                    BorderColor: "green",
                                    borderWidth: "10px"
                                }}
                                key={d.id}
                            >
                                {d}
                            </div>
                        ))}

                    </div>
                </Grid>
            </Grid>
                <Divider style={{width:'100%'}}  justifycontent="center" variant="middle" sx={{marginBottom: 5, marginTop: 5, borderBottomWidth: 3}}/>
            </Container>
        </ThemeProvider>
    );

};


export default CreateCustom;