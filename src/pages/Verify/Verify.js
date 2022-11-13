import React, {useEffect} from 'react';
import {
    Container, createTheme, CssBaseline, ThemeProvider
} from "@mui/material";
import {useState} from "react";
import {themeOptions} from "../../utils/ThemeOptions";
import {PopUp} from "../../components/StyledMui/PopUp";

const theme = createTheme(themeOptions);

// Verify page for account, waits for server response and displays appropriate
// Popup message with refer to login page -AK
export default function Verify() {
    // Host and client url information
    const host = process.env.REACT_APP_SERVER;
    const tokenUrl = window.location.pathname;
    const fullUrl = window.location.href;

    // response data to be used and response status for displaying popup
    const [resMessage, setResMessage] = useState();
    const  [resReceived, setResReceived] = useState(false);

    // Async function to verify the actual token
    const verifyToken = async() => {
        try{
            const requestOptions = {
                method: 'POST',
                url: fullUrl,
            }
            await (await fetch(host + tokenUrl, requestOptions)).json()
                .then((res) => {
                    console.log(res);
                    console.log(res.message);
                    setResMessage(res.message);
                    // setting received status for popup display
                    setResReceived(true)
                });
            }
        catch(e){
            console.log(e);
        }
    }
    useEffect( () => {
        const res = verifyToken()
        }, [])


    return(
        <div>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs" >
                    <CssBaseline />
                    {resReceived &&
                        <PopUp buttonText={"OK"} displayText={resMessage} referTo={"/login"}/>
                    }
                </Container>
            </ThemeProvider>
        </div>
    )
}