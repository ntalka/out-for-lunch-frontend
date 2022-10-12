import React from 'react';
import './Main.css'
import {
    Box,
    Container,
    createTheme,
    CssBaseline,
    ThemeProvider
} from "@mui/material";
import {themeOptions} from "../Theme/ThemeOptions";
import TimeSelector from "../TimeSelector/TimeSelector";

const theme = createTheme(themeOptions);

// Test location and embed links for proof of concept -AK
const testLocation = {
    lat: 61.49925378109671,
    long: 23.776468082987602,
    address: "Itsenäisyydenkatu 3, 33100 Tampere, Suomi",
    placeid: "ChIJuy6UbDjfjkYRmI04K3dwVcs",
}
const APIKEY = "YOUR_KEY_HERE";
const embedLink = "https://www.google.com/maps/embed/v1/place?" +
"key=" + APIKEY +
"&q=place_id:" + testLocation.placeid;


// Main page for displaying the restaurants / locations
// TODO: Actual functionality, currently just contains 2 proof of concepts for
// TODO: maps
export default function Main() {
    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
        <h2>Main Page - Restaurants</h2>
                    <TimeSelector></TimeSelector>

            <iframe
                src={embedLink}
                width="300" height="300" frameBorder="0" style={{border: 0}}
                allowFullScreen="" aria-hidden="false" tabIndex="0"/>
            </Box>
            </Container>
        </ThemeProvider>
            );
}