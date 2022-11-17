import './Main.css'
import {
    Accordion, AccordionDetails, AccordionSummary,
    Box, Button,
    Container,
    createTheme,
    CssBaseline, Divider, Grid,
    ThemeProvider
} from "@mui/material";
import {themeOptions} from "../../utils/ThemeOptions";
import TimeSelector from "../../components/TimeSelector/TimeSelector";
import {RenderDropDowns} from "../../components/GroupDropDown/GroupDropDown";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {getUser, useAuth} from "../../utils/Authenticate";
import dayjs from "dayjs";
import React from "react";
import {postRequest} from "../../utils/RequestUtils";


const theme = createTheme(themeOptions);



// Main page for displaying the restaurants / locations
export default function Main() {
    const {user} = useAuth();
    const host = process.env.REACT_APP_SERVER;
    const [start] = React.useState(sessionStorage.getItem("start"));
    const [end] = React.useState(sessionStorage.getItem("end"));

    const [expanded, setExpanded] = React.useState(true);

    const handleChange = () =>{
        setExpanded(!expanded);
    }

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
        const body = {
            "endTime": "2022-11-07T14:00:35Z",
            "startTime": "2022-11-07T09:00:35Z"}
        postRequest("/join-random-group", body, String(user))
            .then((resJSON) =>{
                console.log(resJSON);
                console.log(resJSON.message);
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
                    <Accordion
                        id={"lunchTimePicker"}
                        sx={{backgroundColor: "#00173a" }}
                        expanded={expanded}
                    >
                        <AccordionSummary
                            sx={{backgroundColor: "#80a4ff", color: "black",
                                "& .MuiAccordionSummary-content": {
                                    justifyContent: "center",
                                } }}
                            expandIcon={ <ExpandMoreIcon onClick={handleChange} />}>

                            <Typography > Lunch time picker </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <TimeSelector/>
                            <Button
                                onClick={joinRandom}
                                id={"JoinRandom"}
                                style={{minWidth: 360}}
                                >Join random suitable group</Button>
                        </AccordionDetails>

                    </Accordion>
                    <Divider style={{width:'100%'}}  justifycontent="center" variant="middle" sx={{borderBottomWidth: 3}}/>
                    <Typography sx={{ marginTop: 1, marginBottom: 3}}> Groups of the day </Typography>
                    <Grid container justifyContent={"center"}>
                        <RenderDropDowns/>
                    </Grid>
                    <Grid>
                        <Button component={Link} to="/createcustom"
                                id={"CreateCustom"}
                                style={{minWidth: 360}}
                                sx={{ marginTop: 1,}}
                                >Create custom</Button>
                    </Grid>
            </Box>
            </Container>
        </ThemeProvider>
            );

}