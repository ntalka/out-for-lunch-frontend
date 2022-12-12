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
import React from "react";
import {joinRandomGroup} from "../../utils/Groups";


const theme = createTheme(themeOptions);



// Main page for displaying the restaurants / locations
export default function Main() {
    const [start] = React.useState(sessionStorage.getItem("start"));
    const [end] = React.useState(sessionStorage.getItem("end"));
    const [expanded, setExpanded] = React.useState(true);

    const handleChange = () =>{
        setExpanded(!expanded);
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
                        expanded={expanded}
                    >
                        <AccordionSummary
                            expandIcon={ <ExpandMoreIcon onClick={handleChange} />}>
                            <Typography fontWeight={"bold"} > Lunch time picker </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <TimeSelector/>
                            <Button
                                onClick={function(){joinRandomGroup(start, end)}}
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
                                >Create group</Button>
                    </Grid>
            </Box>
            </Container>
        </ThemeProvider>
            );

}