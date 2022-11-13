import React from 'react';
import {
    Box,
    Button,
    Container, createTheme,
    CssBaseline, Divider, FormControl, MenuItem, Select,
    ThemeProvider
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {themeOptions} from "../../utils/ThemeOptions";
import {Link} from "react-router-dom";

const theme = createTheme(themeOptions);

const Profile = () => {
    const [location, setLocation] = React.useState(10);

    const handleChange = (event) => {
        setLocation(event.target.value);
    };


    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box margin="auto" textAlign='center'  justifycontent="center" sx={{ width: '100%', maxWidth: 360 }}>
                    <Typography  fontSize={25} textAlign={"center"} > Your Profile</Typography>
                    <Divider  justifycontent="center" variant="middle" sx={{borderBottomWidth: 3}}/>
                    <Typography> Currently selected office: </Typography>
                    <FormControl  sx={{  minWidth: 200, marginBottom: 2, marginTop: 1., fontWeight: "bold", color: "black", borderRadius: 2,
                            backgroundColor: theme.palette.secondary.dark,
                            '&:hover':{backgroundColor: theme.palette.primary.dark,
                                color: theme.palette.primary.contrastText}}}>

                        <Select sx={{color: "black", fontWeight: "bold"}}
                                defaultValue={10}
                                labelId="select-label"
                                id="select"
                                value={location}
                                label="Location"
                                onChange={handleChange}
                        >

                            <MenuItem  sx={{color: "black", fontWeight: "bold"}} value={10}>Ratina</MenuItem>
                            <MenuItem sx={{color: "black", fontWeight: "bold"}} value={20}>Location 2</MenuItem>
                            <MenuItem sx={{color: "black", fontWeight: "bold"}} value={30}>Location 3</MenuItem>
                        </Select>
                    </FormControl>
                    <Divider  justifycontent="center" variant="middle" sx={{borderBottomWidth: 3}}/>

                    <Button component={Link} to="/main" sx={{ fontWeight: "bold",  marginTop: 5, marginBottom: -25,  color: "black", borderRadius: 2,
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