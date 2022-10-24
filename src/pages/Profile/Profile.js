import React from 'react';
import {
    Box,
    Button,
    Container, createTheme,
    CssBaseline, Divider, Menu, MenuItem,
    ThemeProvider
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {themeOptions} from "../../utils/Theme/ThemeOptions";
import {Link} from "react-router-dom";
import {useState} from "react";
const theme = createTheme(themeOptions);

const Profile = () => {

    //value/state change on preferred lunch time
    const [values, setValues] = useState({
        lunchTime: "11:00",
        profile: "placeholder@huld.io",
        officeLocation: "Testi1"
    });

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClose = e => {
        setAnchorEl(null);
        setOpen(false);
        values.lunchTime = e.currentTarget.outerText;



    }

    const handleClick = (e) =>{
        setAnchorEl(e.currentTarget);
        setOpen(true);
    }




    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box margin="auto" textAlign='center'  justifyContent="center" sx={{ width: '100%', maxWidth: 360 }}>
                    <Typography  fontSize={25} textAlign={"center"} > Your Profile</Typography>

                    <Typography  textAlign={"center"}> {values.profile} </Typography>

                    <Divider  justifyContent="center" variant="middle" sx={{borderBottomWidth: 3}}/>


                    <Button variant={"contained"} onClick={handleClick} sx={{ marginTop: 2, textTransform: 'none', color: "black", borderRadius: 2,
                        backgroundColor: theme.palette.secondary.dark,
                        '&:hover':{backgroundColor: theme.palette.primary.dark,
                            color: theme.palette.primary.contrastText,

                        }}}> Set my preferred lunch time</Button>

                    <Menu anchorEl={anchorEl} open={open} onClose={handleClick}>
                        <MenuItem onClick={handleClose}>10:00</MenuItem>
                        <MenuItem onClick={handleClose}>10:15</MenuItem>
                        <MenuItem onClick={handleClose}>10:30</MenuItem>
                        <MenuItem onClick={handleClose}>10:45</MenuItem>

                        <MenuItem onClick={handleClose}>11:00</MenuItem>
                        <MenuItem onClick={handleClose}>11:15</MenuItem>
                        <MenuItem onClick={handleClose}>11:30</MenuItem>
                        <MenuItem onClick={handleClose}>11:45</MenuItem>

                        <MenuItem onClick={handleClose}>12:00</MenuItem>
                        <MenuItem onClick={handleClose}>12:15</MenuItem>
                        <MenuItem onClick={handleClose}>12:30</MenuItem>
                        <MenuItem onClick={handleClose}>12:45</MenuItem>

                        <MenuItem onClick={handleClose}>13:00</MenuItem>
                        <MenuItem onClick={handleClose}>13:15</MenuItem>
                        <MenuItem onClick={handleClose}>13:30</MenuItem>
                        <MenuItem onClick={handleClose}>13:45</MenuItem>

                        <MenuItem onClick={handleClose}>14:00</MenuItem>
                    </Menu>
                    <Typography marginTop={1} marginBottom={2} textAlign={"center"}> Currently set @ {values.lunchTime} </Typography>

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