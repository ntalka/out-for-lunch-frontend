import './Register.css';


import React from "react";
import {Box, Button, createTheme, CssBaseline, TextField, ThemeProvider} from "@mui/material";
import Typography from "@mui/material/Typography";
import {themeOptions} from "../Theme/ThemeOptions";
const theme = createTheme(themeOptions);


const Register = () => {
    return <div>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <form>
                <Box id={"RegisterBox"}
                     display ="flex"
                     flexDirection={"column"}
                     maxWidth={400}
                     alignItems="center"
                     justifyContent={"center"}
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
                               type={"email"}
                               variant = "outlined"
                               placeholder={"Email"}
                               margin ="normal" />

                    <TextField id={"Password"}
                               sx={{ border: 1, borderRadius: 3}}
                               type={"password"}
                               variant = "outlined"
                               placeholder = "Password"
                               margin ="normal"/>

                    <TextField id={"PasswordAgain"}
                               sx={{ border: 1, borderRadius: 3}}
                               type={"password"}
                               variant = "outlined"
                               placeholder={"Password again"}
                               margin ="normal" />

                    <Button id={"RegisterButton"}
                            sx={{ marginTop: 2, borderRadius: 2 }}
                            style={{minWidth:'120px'}}
                            variant = "contained"> Register</Button>

                    <Button sx={{ marginTop: 1, borderRadius: 2 }}
                            variant = "contained"
                            style={{minWidth:'80px'}}> login</Button>
                    
                </Box>

            </form>
        </ThemeProvider>
    </div>;
};

export default Register;