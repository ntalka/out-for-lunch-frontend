import React, {useCallback, useState} from 'react';
import './Login.css'
import {
    Box, Button,
    Container, createTheme,
    CssBaseline, FormControlLabel, Grid, Link, Switch, TextField,
    ThemeProvider,
    FormLabel
} from "@mui/material";
import {themeOptions} from "../../utils/Theme/ThemeOptions";
// noinspection ES6CheckImport
import {
    Link as Link2,
    Navigate,
    useLocation,
    useNavigate
} from "react-router-dom";
import {useAuth} from "../../utils/Authentication/Authenticate";


const theme = createTheme(themeOptions);


/*
Login for the website. Contains elements for email and password submission
Button elements for submitting, forgetting password and registering
TODO: async function to call backend for login -AK

 */
const Login = () => {
    const {setUser, user} = useAuth();
    const [username, setUsername] = useState(user);
    const navigate = useNavigate();
    const location = useLocation();

    // Login submit for the user, provides it to the authenticator
    // TODO: async call for backend for checking actual login - AK
    const submit = useCallback(
        (event) => {
            const data = new FormData(event.currentTarget);
            console.log({
                email: data.get('email'),
                password: data.get('password'),
            });
            setUsername((String)(data.get('email')));
            event.preventDefault();
            setUser({username});
            navigate("/main");
        },
        [setUser, username]
    );

    if (user) {
        console.log(user);
        return (<Navigate
            to={{ pathname: "/main", state: { from: location }}}/>)
    } else {
        console.log(user);
        return (

            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <FormLabel style={{
                        marginLeft: "110px",
                        marginTop: "-20px",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        width: "175px",
                        backgroundColor: "#00173a",
                        position: "absolute",
                        fontSize: "28px"
                    }}>Please log in</FormLabel>
                    <Box
                        id={"LoginBox"}
                        display="flex"
                        flexDirection={"column"}
                        marginTop={3}
                        maxWidth={400}
                        alignItems={'center'}
                        padding={5}
                        borderRadius={4}
                        borderColor={"white"}
                        border={1}
                    >

                        <Box component="form" onSubmit={submit} noValidate
                             sx={{mt: 1}}
                             textAlign='center'>
                            <TextField

                                // still hard coded borders
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& > fieldset": {
                                            borderColor: theme.palette.secondary.contrastText,
                                            borderRadius: 3
                                        },
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
                            <TextField // still hard coded borders
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& > fieldset": {
                                            borderColor: theme.palette.secondary.contrastText,
                                            borderRadius: 3
                                        },
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
                                sx={{marginBottom: 2, marginTop: -1}}
                            />

                            {/*Button grid starts here */}
                            <Grid>
                                <Grid item>
                                    <Button
                                        sx={{borderRadius: 2}}
                                        style={{minWidth: '180px'}}
                                        type="submit"
                                        variant="contained"
                                    >
                                        Log In
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        sx={{mt: 1, mb: 2, borderRadius: 2}}
                                        style={{minWidth: '120px'}}
                                        type="link"
                                        variant="contained"
                                        component={Link2} to="/register">
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
                </Container>
            </ThemeProvider>
        );
    }
}

export default Login;