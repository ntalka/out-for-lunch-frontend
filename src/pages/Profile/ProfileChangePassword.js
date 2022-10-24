import React from 'react';
import {
    Box,
    Button,
    Container, createTheme,
    CssBaseline, Divider, TextField,
    ThemeProvider
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {themeOptions} from "../../utils/Theme/ThemeOptions";
import {Link} from "react-router-dom";
import {useState} from "react";
const theme = createTheme(themeOptions);

const ProfileChangePassword = () => {

    const profile = "placeholder@huld.io";

    const [values, setValues] = useState({
        currentPassword: "",
        newPassword: "",
        newPasswordAgain: ""
    });

    // check if new passwords are same
    const passwordError = (!(values.newPassword === values.newPasswordAgain ));


    // handle change on current password
    const handleChangeCurrentPassword = currentPassword => event => {
        setValues({...values, [currentPassword]: event.target.value});
    };

    //handle change on new password
    const handleChangeNewPassword = newPassword => event => {
        setValues({...values, [newPassword]: event.target.value});
    };


    // handle change on new password again
    const handleChangeNewPasswordAgain = newPasswordAgain => event => {
        setValues({...values, [newPasswordAgain]: event.target.value});
    };


    // handle password change submit
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        console.log(profile);
        console.log({
            currentPassword: data.get("currentPassword"),
            newPassword: data.get('newPassword'),
            newPasswordAgain: data.get("newPasswordAgain")
        });
    };

    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <form onSubmit={handleSubmit}>
                <Box margin="auto" textAlign='center'  justifycontent="center" sx={{ width: '100%', maxWidth: 360 }}>
                    <Typography  fontSize={25} textAlign={"center"} > Your Profile</Typography>

                    <Typography  textAlign={"center"}> {profile} </Typography>

                    <Divider  justifycontent="center" variant="middle" sx={{borderBottomWidth: 3}}/>
                    <TextField label ="Current Password"
                               id ="currentPassword"
                               value={values.currentPassword}
                               name={"currentPassword"}
                               type={"password"}
                               required
                               variant = "outlined"
                               placeholder={"Current Password"}
                               margin ="normal"
                               onChange={handleChangeCurrentPassword("currentPassword")}


                        // still hard coded borders
                               sx={{
                                   "& .MuiOutlinedInput-root": {
                                       "& > fieldset": {
                                           borderColor: theme.palette.secondary.contrastText,
                                           borderRadius : 3},
                                   },
                               }}/>

                    <TextField id={"newPassword"}
                               name={"newPassword"}
                               type={"password"}
                               label="New Password"
                               required
                               values={values.newPassword}
                               variant = "outlined"
                               placeholder = "New Password"
                               margin ="normal"
                               onChange={handleChangeNewPassword("newPassword")}
                               helperText={passwordError ? "Both passwords need to be same" : ""}
                               error={passwordError}

                        // still hard coded borders
                               sx={{
                                   "& .MuiOutlinedInput-root": {
                                       "& > fieldset": {
                                           borderColor: theme.palette.secondary.contrastText,
                                           borderRadius : 3}
                                       ,
                                   },
                               }}
                    />

                    <TextField id={"newPasswordAgain"}
                               required
                               label = "New Password Again"
                               name={"newPasswordAgain"}
                               type={"password"}
                               variant = "outlined"
                               placeholder={"New Password again"}
                               margin ="normal"
                               values={values.newPasswordAgain}
                               onChange={handleChangeNewPasswordAgain("newPasswordAgain")}
                               helperText={passwordError ? "Both passwords need to be same" : ""}
                               error={passwordError}

                        // still hard coded borders
                               sx={{
                                   "& .MuiOutlinedInput-root": {
                                       "& > fieldset": {
                                           borderColor: theme.palette.secondary.contrastText,
                                           borderRadius : 3},
                                   },
                               }}
                    />
                    <Typography></Typography>
                    <Button  type={"submit"}  sx={{ fontWeight: "bold", textTransform: 'none',  marginTop: 2, marginBottom: 2,  color: "black", borderRadius: 2,
                        backgroundColor: theme.palette.secondary.dark,
                        '&:hover':{backgroundColor: theme.palette.primary.dark,
                            color: theme.palette.primary.contrastText,

                        }}}>Yes! Change my password</Button>


                    <Divider  justifycontent="center" variant="middle" sx={{borderBottomWidth: 3}}/>
                    <Button component={Link} to="/profile" sx={{fontWeight: "bold", marginTop: 5, marginBottom: -25,  textTransform: 'none', color: "black", borderRadius: 2,
                        backgroundColor: theme.palette.secondary.dark,
                        '&:hover':{backgroundColor: theme.palette.primary.dark,
                            color: theme.palette.primary.contrastText,
                        }}}
                    >Back to profile </Button>
                </Box>
                </form>
            </Container>
        </ThemeProvider>

    );

};

export default ProfileChangePassword;