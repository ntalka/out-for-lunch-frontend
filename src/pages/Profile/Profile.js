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
import {Link} from "react-router-dom";
const theme = createTheme(themeOptions);

const Profile = () => {

    const lunch_time = "12:00";

    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box margin="auto" textAlign='center'  justifyContent="center" sx={{ width: '100%', maxWidth: 360 }}>
                    <Typography  fontSize={25} textAlign={"center"} > Your Profile</Typography>
                    <Typography  textAlign={"center"}> Placeholder@huld.io </Typography>
                    <Divider  justifyContent="center" variant="middle" sx={{borderBottomWidth: 3}}/>
                    <Button sx={{ marginTop: 2, textTransform: 'none', color: "black", borderRadius: 2,
                        backgroundColor: theme.palette.secondary.dark,
                        '&:hover':{backgroundColor: theme.palette.primary.dark,
                            color: theme.palette.primary.contrastText,

                        }}}> Set my preferred lunch time</Button>
                    <Typography marginTop={1} marginBottom={2} textAlign={"center"}> Currently set @ {lunch_time} </Typography>
                    <Divider  justifyContent="center" variant="middle" sx={{borderBottomWidth: 3}}/>
                    <Button sx={{ marginTop: 2, marginBottom: 2, textTransform: 'none', color: "black", borderRadius: 2,
                        backgroundColor: theme.palette.secondary.dark,
                        '&:hover':{backgroundColor: theme.palette.primary.dark,
                            color: theme.palette.primary.contrastText,

                        }}}>Change password</Button>
                    <Divider  justifyContent="center" variant="middle" sx={{borderBottomWidth: 3}}/>
                    <Button component={Link} to="/main" sx={{ marginTop: 5, marginBottom: -25,  textTransform: 'none', color: "black", borderRadius: 2,
                        backgroundColor: theme.palette.secondary.dark,
                        '&:hover':{backgroundColor: theme.palette.primary.dark,
                            color: theme.palette.primary.contrastText,
                        }}}
                            >Back to main page </Button>
                </Box>



            </Container>
        </ThemeProvider>

    );

};

export default Profile;