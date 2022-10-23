import React from 'react';
import './Main.css'
import {
    Box,
    Container,
    createTheme,
    CssBaseline,
    ThemeProvider
} from "@mui/material";
import {themeOptions} from "../../utils/Theme/ThemeOptions";
import TimeSelector from "../../components/TimeSelector/TimeSelector";
import {AllGroupDropDown} from "../../components/GroupDropDown/GroupDropDown";

const theme = createTheme(themeOptions);



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
                    <TimeSelector/>
                    <AllGroupDropDown/>

            </Box>
            </Container>
        </ThemeProvider>
            );
}