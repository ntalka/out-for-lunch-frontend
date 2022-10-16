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
import {themeOptions} from "../Theme/ThemeOptions";
const theme = createTheme(themeOptions);

/*
Register for the website
Button elements for submitting, forgetting password and registering
TODO: actual register, currently just grabs data and logs on console,

 */


const Register = () => {

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
                               name={"email"}
                               type={"email"}
                               variant = "outlined"
                               placeholder={"Email"}
                               margin ="normal"

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
                               variant = "outlined"
                               placeholder = "Password"
                               margin ="normal"

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
                               label = "Password again"
                               name={"passwordAgain"}
                               type={"password"}
                               variant = "outlined"
                               placeholder={"Password again"}
                               margin ="normal"

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