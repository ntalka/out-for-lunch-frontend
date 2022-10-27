import React from 'react';
import {useNavigate} from "react-router-dom";
import {
    Box,
    Button, Container, createTheme, CssBaseline, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText, ThemeProvider
} from "@mui/material";
import {useState} from "react";
import {themeOptions} from "../../utils/Theme/ThemeOptions";

const theme = createTheme(themeOptions);

export default function Verify() {
    const [open, setOpen] = useState(true)
    const navigate = useNavigate();
    const host = process.env.REACT_APP_SERVER;
    const tokenUrl = window.location.pathname
    const fullUrl = window.location.href;

    const verifyToken = async() => {
        const requestOptions = {
            method: 'POST',
            url: fullUrl,
        }
        console.log(requestOptions);
        const res = await fetch(host + tokenUrl, requestOptions)
        const resJSON = await res.json()
            .then((resJSON) => {
                console.log(resJSON);
                console.log(resJSON.message);
            });
        return res;
    }
    const res = verifyToken();
    function handleClick(){
        navigate("/login");
    }

    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" >
                <CssBaseline />


        </Container>
            </ThemeProvider>
    );
}