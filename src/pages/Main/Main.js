import React from 'react'
import './Main.css'
import {
    Box, Button, ButtonGroup,
    Container,
    createTheme,
    CssBaseline, Divider, Grid,
    ThemeProvider
} from "@mui/material";
import {themeOptions} from "../../utils/Theme/ThemeOptions";
import TimeSelector from "../../components/TimeSelector/TimeSelector";
import {RenderDropDowns} from "../../components/GroupDropDown/GroupDropDown";
import Typography from "@mui/material/Typography";
import {getUser, useAuth} from "../../utils/Authentication/Authenticate";
import dayjs from "dayjs";


const theme = createTheme(themeOptions);



// Main page for displaying the restaurants / locations
export default function Main() {
    const {user} = useAuth();
    const host = process.env.REACT_APP_SERVER;
    const utcNow = new Date().toISOString().slice(0, -1);
    const [start] = React.useState(sessionStorage.getItem("start"));
    const [end] = React.useState(sessionStorage.getItem("end"));
    console.log(user);

    const createRandom = async () =>{
        let requestOptions = {
            method: 'POST',
            headers: {
                'Authorization' : user},
            body: {
                "startTime" : start,
                "endTime" : end},
            redirect: 'follow'
        };

        console.log(requestOptions);
        const res = await fetch(host + '/create-random-group', requestOptions )
        await res.json()
            .then((resJSON) =>{
                console.log(resJSON);
                console.log(resJSON.message);
                if(resJSON.status === 200){
                    console.log("ryhmä luotu")
                }
            });
    }

    const joinRandom = async () =>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiJ9.emVlYmFyYW16YW5AZ21haWwuY29t.m44QU9VeNaVUqynpFcw5mCMvYAjRKS8AdOs_gkixzpw");

        const raw = "{\r\n\"endTime\":\"2022-10-29T11:00:04.169\",\r\n\"startTime\":\"2022-10-29T09:00:04.000\"\r\n}";

        const requestOptions = {
            method: 'POST',
            headers: {"Authorization" : "eyJhbGciOiJIUzI1NiJ9.emVlYmFyYW16YW5AZ21haWwuY29t.m44QU9VeNaVUqynpFcw5mCMvYAjRKS8AdOs_gkixzpw"},
            body: {
                "endTime":"2022-10-29T11:00:04.169",
                "startTime":"2022-10-29T09:00:04.000"
            },
            redirect: 'follow'
        };
        console.log(JSON.stringify({
            "endTime":"2022-10-29T11:00:04.169",
            "startTime":"2022-10-29T09:00:04.000"
        }))

        console.log(requestOptions);
        const res = await fetch(host + '/join-random-group', requestOptions )
        await res.json()
            .then((resJSON) =>{
                console.log(resJSON);
                console.log(resJSON.message);
                if(resJSON.status === 200){
                    console.log("ryhmä liitytty")
                }
            });
    }


    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <TimeSelector/>
                    <Divider style={{width:'100%'}}  justifycontent="center" variant="middle" sx={{borderBottomWidth: 3, marginBottom: 1}}/>
                    <Typography> Please select an option </Typography>
                    <ButtonGroup variant="contained" aria-label="button group" sx={{marginTop: 2, marginBottom: 2}} >
                        <Button
                            onClick={joinRandom}
                            id={"Join random"}
                            sx={{ fontSize: 11.5, fontWeight: "bold", color: "black", borderRadius: 2,
                            backgroundColor: theme.palette.secondary.dark,
                            '&:hover':{backgroundColor: theme.palette.primary.dark,
                                color: theme.palette.primary.contrastText,
                            }}}>Join random</Button>
                        <Button
                            onClick={createRandom}
                            id={"Create random"}
                            sx={{ fontSize: 11.5, fontWeight: "bold", color: "black", borderRadius: 2,
                            backgroundColor: theme.palette.secondary.dark,
                            '&:hover':{backgroundColor: theme.palette.primary.dark,
                                color: theme.palette.primary.contrastText,
                            }}}>Create random</Button>
                        <Button
                            id={"Create custom"}
                            sx={{ fontSize: 11.5, fontWeight: "bold", color: "black", borderRadius: 2,
                            backgroundColor: theme.palette.secondary.dark,
                            '&:hover':{backgroundColor: theme.palette.primary.dark,
                                color: theme.palette.primary.contrastText,
                            }}}>Create custom</Button>
                    </ButtonGroup>
                    <Divider style={{width:'100%'}}  justifycontent="center" variant="middle" sx={{borderBottomWidth: 3}}/>
                    <Typography sx={{ marginTop: 1, marginBottom: 3}}> Groups of the day </Typography>
                    <Grid container justifyContent={"center"}>
                        <RenderDropDowns/>
                    </Grid>

            </Box>
            </Container>
        </ThemeProvider>
            );

}