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

    const [anchorEl, setAnchorElm] = useState(null);
    const [open, setOpen] = useState(false);

    // close on selection
    const handleClose = e => {
        setAnchorElm(null);
        setOpen(false);
        values.lunchTime = e.currentTarget.outerText;
        console.log(values.lunchTime);

    }

    // open dropdown menu
    const handleClick = (e) =>{
        setAnchorElm(e.currentTarget);
        setOpen(true);
    }




    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box margin="auto" textAlign='center'  justifycontent="center" sx={{ width: '100%', maxWidth: 360 }}>
                    <Typography  fontSize={25} textAlign={"center"} > Your Profile</Typography>

                    <Typography  textAlign={"center"}> {values.profile} </Typography>

                    <Divider  justifycontent="center" variant="middle" sx={{borderBottomWidth: 3}}/>


                    <Button variant={"contained"} onClick={handleClick} sx={{fontWeight: "bold",  marginTop: 2, textTransform: 'none', color: "black", borderRadius: 2,
                        backgroundColor: theme.palette.secondary.dark,
                        '&:hover':{backgroundColor: theme.palette.primary.dark,
                            color: theme.palette.primary.contrastText,

                        }}}> Set my preferred lunch time</Button>


                    {/* currenly hardcoded times, change to list somehow */}
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClick}>
                        <MenuItem sx={{ color: "black", fontWeight: "bold" }} onClick={handleClose}>10:00</MenuItem>
                        <MenuItem sx={{ color: "black", fontWeight: "bold" }} onClick={handleClose}>10:15</MenuItem>
                        <MenuItem sx={{ color: "black", fontWeight: "bold" }} onClick={handleClose}>10:30</MenuItem>
                        <MenuItem sx={{ color: "black", fontWeight: "bold" }} onClick={handleClose}>10:45</MenuItem>

                        <MenuItem sx={{ color: "black", fontWeight: "bold" }} onClick={handleClose}>11:00</MenuItem>
                        <MenuItem sx={{ color: "black", fontWeight: "bold" }} onClick={handleClose}>11:15</MenuItem>
                        <MenuItem sx={{ color: "black", fontWeight: "bold" }} onClick={handleClose}>11:30</MenuItem>
                        <MenuItem sx={{ color: "black", fontWeight: "bold" }} onClick={handleClose}>11:45</MenuItem>

                        <MenuItem sx={{ color: "black", fontWeight: "bold" }} onClick={handleClose}>12:00</MenuItem>
                        <MenuItem sx={{ color: "black", fontWeight: "bold" }} onClick={handleClose}>12:15</MenuItem>
                        <MenuItem sx={{ color: "black", fontWeight: "bold" }} onClick={handleClose}>12:30</MenuItem>
                        <MenuItem sx={{ color: "black", fontWeight: "bold" }} onClick={handleClose}>12:45</MenuItem>

                        <MenuItem sx={{ color: "black", fontWeight: "bold" }} onClick={handleClose}>13:00</MenuItem>
                        <MenuItem sx={{ color: "black", fontWeight: "bold" }} onClick={handleClose}>13:15</MenuItem>
                        <MenuItem sx={{ color: "black", fontWeight: "bold" }} onClick={handleClose}>13:30</MenuItem>
                        <MenuItem sx={{ color: "black", fontWeight: "bold" }} onClick={handleClose}>13:45</MenuItem>

                        <MenuItem sx={{ color: "black", fontWeight: "bold" }} onClick={handleClose}>14:00</MenuItem>
                    </Menu>
                    <Typography marginTop={1} marginBottom={2} textAlign={"center"}> Currently set @ {values.lunchTime} </Typography>

                    <Divider  justifycontent="center" variant="middle" sx={{borderBottomWidth: 3}}/>

                    <Button component={Link} to="/profile/changepassword" sx={{fontWeight: "bold", marginTop: 2, marginBottom: 2, textTransform: 'none', color: "black", borderRadius: 2,
                        backgroundColor: theme.palette.secondary.dark,
                        '&:hover':{backgroundColor: theme.palette.primary.dark,
                            color: theme.palette.primary.contrastText,

                        }}}>Change password</Button>
                    <Divider  justifycontent="center" variant="middle" sx={{borderBottomWidth: 3}}/>

                    <Button component={Link} to="/main" sx={{ fontWeight: "bold",  marginTop: 5, marginBottom: -25,  textTransform: 'none', color: "black", borderRadius: 2,
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