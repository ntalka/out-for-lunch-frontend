import './Register.css';
import {
    Box,
    Button,
    Container,
    createTheme,
    CssBaseline,
    TextField,
    ThemeProvider
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {themeOptions} from "../Theme/ThemeOptions";
const theme = createTheme(themeOptions);



const Register = () => {
    const  registerText = " Check your email after registration to finalize the process!";



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
                <Typography variant="h2" textAlign={"center"} sx={{ fontSize: 30 }} marginBottom={-5} > Registeration</Typography>
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
                     borderRadius={5}
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
                               sx={{
                                   "& .MuiOutlinedInput-root": {
                                       "& > fieldset": {
                                           borderColor: theme.palette.secondary.contrastText,
                                           borderRadius : 3},
                                   },
                               }}

                    />

                    <Typography maxWidth={170} textAlign={"center"} > {registerText} </Typography>

                    <Button id={"RegisterButton"}
                            sx={{ marginTop: 2, borderRadius: 2 }}
                            style={{minWidth:'120px'}}
                            type={"submit"}
                            fontColo
                            variant = "contained"> Register
                    </Button>
                </Box>
            </form>
            </Container>
        </ThemeProvider>
    );

};

export default Register;