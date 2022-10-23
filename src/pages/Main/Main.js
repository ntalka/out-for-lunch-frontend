import React from 'react';
import './Main.css'
import {
    Box,
    Container,
    createTheme,
    CssBaseline, Grid,
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
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <TimeSelector/>
                    <Grid container justifyContent={"center"}>
                        <AllGroupDropDown/>
                    </Grid>

            </Box>
            </Container>
        </ThemeProvider>
            );
}