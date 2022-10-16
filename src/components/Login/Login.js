import React from 'react';
import './Login.css'
import {
    Box, Button,
    Container, createTheme,
    CssBaseline, FormControlLabel, Grid, Link, Switch, TextField,
    ThemeProvider,
    FormLabel
} from "@mui/material";
import {themeOptions} from "../Theme/ThemeOptions";
import {Link as Link2} from "react-router-dom";


const theme = createTheme(themeOptions);


/*
Login for the website. Contains elements for email and password submission
Button elements for submitting, forgetting password and registering
TODO: actual login, currently just grabs data and logs on console,
TODO: Consistent styling, currently a lot of is hard coded like textbox borders

-AK
 */
const Login = () => {
    // TODO: working login event -AK
    const submit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return(

        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <FormLabel style={{marginLeft: "110px", marginTop: "-20px", paddingLeft: "5px", paddingRight: "5px",  width: "175px", backgroundColor: "#00173a", position: "absolute", fontSize: "28px"}}>Please log in</FormLabel>
                <Box
                        id={"LoginBox"}
                        display ="flex"
                        flexDirection={"column"}
                        marginTop= {3}
                        maxWidth={400}
                        alignItems={'center'}
                        padding={5}
                        borderRadius={4}
                        borderColor={"white"}
                        border={1}
                    >

                    <Box component="form" onSubmit={submit} noValidate sx={{ mt: 1 }}
                         textAlign='center'>
                        <TextField
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& > fieldset": {
                                        borderColor: theme.palette.secondary.contrastText,
                                        borderRadius : 3},
                                },
                            }}
                            variant='outlined'
                            margin="normal"
                            required
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& > fieldset": {
                                        borderColor: theme.palette.secondary.contrastText,
                                        borderRadius : 3},
                                },
                            }}
                            margin="normal"
                            required
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Switch value="remember" defaultChecked
                                             />}
                            color='objective'
                            label="Remember me"
                            labelPlacement={"start"}
                            sx={{marginBottom: 2, marginTop: -1 }}
                        />

                        {/*Button grid starts here */}
                        <Grid >
                            <Grid item >
                                <Button
                                    sx={{ borderRadius: 2 }}
                                    style={{minWidth:'180px'}}
                                    type="submit"
                                    variant="contained"
                                    >
                                    Log In
                                </Button>
                            </Grid>
                            <Grid item >
                                <Button
                                    sx={{mt: 1, mb: 2, borderRadius: 2 }}
                                    style={{minWidth:'120px'}}
                                    type="link"
                                    variant="contained"
                                    component={Link2} to="/register" >
                                    Register
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid  container>
                            <Grid item xs >
                                <Link  href="#" variant="body2" >
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Login;