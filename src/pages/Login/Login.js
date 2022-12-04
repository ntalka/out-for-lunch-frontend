import React from 'react';
import './Login.css'
import {
    Box, Button,
    Container, createTheme,
    CssBaseline, FormControlLabel, Grid, Link, Switch, TextField,
    ThemeProvider,
    FormLabel
} from "@mui/material";
import {themeOptions} from "../../utils/ThemeOptions";
// noinspection ES6CheckImport
import {
    Link as Link2,
    Navigate,
    useLocation,
    useNavigate
} from "react-router-dom";
import {useAuth} from "../../utils/Authenticate";
import {LoginUser} from "../../utils/User";


const theme = createTheme(themeOptions);


/*
Login for the website. Contains elements for email and password submission
Button elements for submitting, forgetting password and registering
 */
const Login = () => {
    const {user, setUser} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const textWidth = String(window.innerWidth/4)+"px"

    // Login submit for the user, provides it to the authenticator
    async function handleSubmit(event) {
            event.preventDefault()
            const data = new FormData(event.currentTarget);
            await LoginUser(data.get('email'), data.get('password'), data.get("remember") !== null)
            setUser(sessionStorage.getItem("authToken"))
            if(user){navigate("/main")}
        }


    if (user) {
        return (<Navigate
            to={{ pathname: "/main", state: { from: location }}}/>)
    } else {
        return (

            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>

                    <FormLabel  style={{
                        marginLeft: textWidth,
                        marginRight: textWidth,
                        maxWidth: "50%",
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

                        <Box component="form" onSubmit={handleSubmit} noValidate
                             sx={{mt: 1}}
                             textAlign='center'>
                            <TextField
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
                                margin="normal"
                                required
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                name="remember"
                                id = "remember"
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
                                        style={{minWidth: '180px'}}
                                        type="submit"
                                        variant="contained">
                                        Log In
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        sx={{mt: 1, mb: 2}}
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