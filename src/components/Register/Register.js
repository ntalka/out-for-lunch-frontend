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
                <Box
                     id={"RegisterBox"}
                     display ="flex"
                     flexDirection={"column"}
                     maxWidth={400}
                     alignItems="center"
                     justifyContent="center"
                     margin={"auto"}
                     marginTop= {8}
                     padding={8}
                     borderRadius={5}
                     borderColor={"white"}
                     border={1}
                >

                    <Typography variant="h2" padding={3} textAlign={"center"}> Register</Typography>

                    <TextField sx={{ border: 1, borderRadius: 3}}
                               id ="email"
                               name={"email"}
                               type={"email"}
                               variant = "outlined"
                               placeholder={"Email"}
                               margin ="normal" />

                    <TextField id={"password"}
                               name={"password"}
                               sx={{ border: 1, borderRadius: 3}}
                               type={"password"}
                               variant = "outlined"
                               placeholder = "Password"
                               margin ="normal"/>

                    <TextField id={"passwordAgain"}
                               name={"passwordAgain"}
                               sx={{ border: 1, borderRadius: 3}}
                               type={"password"}
                               variant = "outlined"
                               placeholder={"Password again"}
                               margin ="normal" />

                    <Typography maxWidth={170} textAlign={"center"} > {registerText} </Typography>

                    <Button id={"RegisterButton"}
                            sx={{ marginTop: 2, borderRadius: 2 }}
                            style={{minWidth:'120px'}}
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