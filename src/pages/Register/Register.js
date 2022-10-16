import './Register.css';
import {
    Box,
    Button,
    Container,
    createTheme,
    CssBaseline,
    TextField,
    ThemeProvider,
    FormLabel
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {themeOptions} from "../../utils/Theme/ThemeOptions";
import {useState} from "react";
const theme = createTheme(themeOptions);

/*
Register for the website
Button elements for submitting, forgetting password and registering
TODO: actual register, currently just grabs data and logs on console,
TODO: quicksand is not correct one, more styling

 */









const Register = () => {


    const [values, setValues] = useState({
        email: "",
        password: "",
        passwordAgain: ""
    });

    //handle change on email
    const handleChangeEmail = email => event => {
        setValues({...values, [email]: event.target.value});
    };

    //handle change on password
    const handleChangePassword = password => event => {
        setValues({...values, [password]: event.target.value});
    };


    // handle change on password again
    const handleChangePasswordAgain = passwordAgain => event => {
        setValues({...values, [passwordAgain]: event.target.value});
    };

    // email error
    const emailError = !values.email.includes("@huld.io");

    // password error
    const passwordError = !(values.password === values.passwordAgain && values.passwordAgain !== "");

    //register text
    const  registerText = " Check your email after registration to finalize the process!";



    // handle registration sumbit
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        console.log({
            email: data.get('email'),
            password: data.get('password'),
            passwordAgain: data.get("passwordAgain")
        });
    };






    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <form onSubmit={handleSubmit} >
                <FormLabel style={{marginLeft: "105px", marginTop: "-20px", paddingLeft: "5px", paddingRight: "5px",  width: "180px", backgroundColor: "#00173a", position: "absolute", fontSize: "28px"}}>Registeration</FormLabel>
                <Box
                     id={"RegisterBox"}
                     display ="flex"
                     flexDirection={"column"}
                     maxWidth={400}
                     alignItems="center"
                     justifyContent="center"
                     margin={"auto"}
                     marginTop= {3}
                     padding={5}
                     borderRadius={4}
                     borderColor={"white"}
                     border={1}
                >

                    <TextField label ="Email"
                               id ="email"
                               value={values.email}
                               name={"email"}
                               type={"email"}
                               required
                               variant = "outlined"
                               placeholder={"Email"}
                               margin ="normal"
                               onChange={handleChangeEmail("email")}
                               helperText={emailError ? "Name needs to be '@huld.io'" : "Perfect!"}
                               error={emailError}

                               // still hard coded borders
                               sx={{
                                   "& .MuiOutlinedInput-root": {
                                       "& > fieldset": {
                                           borderColor: theme.palette.secondary.contrastText,
                                           borderRadius : 3},
                                   },
                               }}/>

                    <TextField id={"password"}
                               name={"password"}
                               type={"password"}
                               label="Password"
                               required
                               values={values.password}
                               variant = "outlined"
                               placeholder = "Password"
                               margin ="normal"
                               onChange={handleChangePassword("password")}
                               helperText={passwordError ? "Both passwords need to be same" : "Perfect!"}
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

                    <TextField id={"passwordAgain"}
                               border
                               required
                               label = "Password again"
                               name={"passwordAgain"}
                               type={"password"}
                               variant = "outlined"
                               placeholder={"Password again"}
                               margin ="normal"
                               values={values.passwordAgain}
                               onChange={handleChangePasswordAgain("passwordAgain")}
                               helperText={passwordError ? "Both passwords need to be same" : "Perfect!"}
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
                    <Typography sx={{fontFamily: 'Quicksand'}} maxWidth={170} textAlign={"center"} > {registerText} </Typography>
                    <Button id={"RegisterButton"}
                            disabled={emailError || passwordError}
                            disableElevation
                            sx={{ marginTop: 2, borderRadius: 2 }}
                            style={{fontFamily: 'Quicksand', fontStyle: 'bold', minWidth:'120px'}}
                            type={"submit"}
                            variant = "contained"> Register

                    </Button>
                </Box>
            </form>
            </Container>
        </ThemeProvider>
    );

};


export default Register;