import './Main.css'
import {
    Accordion, AccordionDetails, AccordionSummary,
    Box, Button,
    Container,
    createTheme,
    CssBaseline, Divider, Grid,
    ThemeProvider
} from "@mui/material";
import {themeOptions} from "../../utils/Theme/ThemeOptions";
import TimeSelector from "../../components/TimeSelector/TimeSelector";
import {RenderDropDowns} from "../../components/GroupDropDown/GroupDropDown";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {getUser, useAuth} from "../../utils/Authentication/Authenticate";
import dayjs from "dayjs";


const theme = createTheme(themeOptions);



// Main page for displaying the restaurants / locations
export default function Main() {
    const {user} = useAuth();
    const host = process.env.REACT_APP_SERVER;
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

        let requestOptions = {
            method: 'POST',
            headers: {
                'Authorization' : user},
            body: {
                "startTime" : "2022-10-29T09:00:50.141",
                "endTime" : "2022-10-29T11:00:04.169"},
            redirect: 'follow'
        };

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
                    <Accordion
                        id={"lunchTimePicker"}
                        sx={{backgroundColor: "#00173a" }}
                        expanded={expanded}
                        onClick={handleChange}
                    >
                        <AccordionSummary
                            sx={{backgroundColor: "#80a4ff", color: "black",
                                "& .MuiAccordionSummary-content": {
                                    justifyContent: "center",
                                } }}
                            expandIcon={<ExpandMoreIcon />}>
                            <Typography > Lunch time picker </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <TimeSelector/>
                            <Button
                                id={"JoinRandom"}
                                style={{minWidth: 360}}
                                sx={{ marginTop: 1,  fontSize: 11.5, fontWeight: "bold", color: "black", borderRadius: 2,
                                    backgroundColor: theme.palette.secondary.dark,
                                    '&:hover':{backgroundColor: theme.palette.primary.dark,
                                        color: theme.palette.primary.contrastText,
                                    }}}>Join random suitable group</Button>
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
                                sx={{ marginTop: 1, fontSize: 11.5, fontWeight: "bold", color: "black", borderRadius: 2,
                                    backgroundColor: theme.palette.secondary.dark,
                                    '&:hover':{backgroundColor: theme.palette.primary.dark,
                                        color: theme.palette.primary.contrastText,
                                    }}}>Create custom</Button>
                    </Grid>
            </Box>
            </Container>
        </ThemeProvider>
            );

}