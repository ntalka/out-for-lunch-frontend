import React from 'react';
import './Login.css'
import {HuldBanner} from "../HuldBanner/HuldBanner";
import {
    Box, Button,
    Container, createTheme,
    CssBaseline, FormControlLabel, Grid, Link, Switch, TextField,
    ThemeProvider,
    Typography
} from "@mui/material";
import {themeOptions} from "../Theme/ThemeOptions";


const theme = createTheme(themeOptions);


/*
Login for the website. Contains elements for email and password submission
Button elements for submitting, forgetting password and registering
TODO: actual login, currently just grabs data and logs on console,
TODO: Consistent styling, currently a lot of is hard coded like textbox borders

-AK
 */
export default function Login() {
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
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>


                    <Typography component="h1" variant="h5">
                        {/*TODO: Box around the header - AK*/}
                        Please log in
                    </Typography>
                    <Box component="form" onSubmit={submit} noValidate sx={{ mt: 1 }}
                         textAlign='center'>
                        <TextField
                            // TODO: Fix hardcoded borders -AK
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& > fieldset": {
                                        borderColor: theme.palette.secondary.contrastText},
                                },
                            }}
                            variant='outlined'
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            // TODO: Fix hardcoded borders -AK
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& > fieldset": {
                                        borderColor: theme.palette.secondary.contrastText},
                                },
                            }}
                            margin="normal"
                            required
                            fullWidth
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
                        />

                        {/*Button grid starts here */}
                        <Grid >
                            <Grid item >
                                <Button style={{minWidth:'200px'}}
                                    type="submit"

                                    variant="contained"
                                    >
                                    Log In
                                </Button>
                            </Grid>
                            <Grid item >
                                <Button style={{minWidth:'120px'}}
                                    type="link"
                                    variant="contained"
                                    sx={{ mt: 1, mb: 2 }}>
                                    Register
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <HuldBanner sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}