import React from 'react';
import {
    Box,
    Button,
    Container, createTheme,
    CssBaseline, Divider, Grid,
    ThemeProvider
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {themeOptions} from "../../utils/Theme/ThemeOptions";
const theme = createTheme(themeOptions);

const Profile = () => {
    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box margin="auto"  justifyContent="center" sx={{ width: '100%', maxWidth: 360 }}>
                    <Typography  fontSize={25} textAlign={"center"} > Your Profile</Typography>
                    <Typography  textAlign={"center"}> Your profile </Typography>
                    <Divider justifyContent="center" variant="middle"
                             sx={{borderBottomWidth: 3}}/>
                    <Typography  textAlign={"center"}> Testi </Typography>
                </Box>



            </Container>
        </ThemeProvider>

    );

};

export default Profile;