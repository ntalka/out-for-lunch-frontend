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


const theme = createTheme(themeOptions);



// Main page for displaying the restaurants / locations
export default function Main() {
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
                        sx={{backgroundColor: "#00173a" }}>
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