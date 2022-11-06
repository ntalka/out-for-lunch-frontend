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
import {AllGroupDropDown} from "../../components/GroupDropDown/GroupDropDown";
import Typography from "@mui/material/Typography";


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
                    <TimeSelector/>
                    <Divider style={{width:'100%'}}  justifycontent="center" variant="middle" sx={{borderBottomWidth: 3, marginBottom: 1}}/>
                    <Typography> Please select an option </Typography>
                    <ButtonGroup variant="contained" aria-label="button group" sx={{marginTop: 2, marginBottom: 2}} >
                        <Button
                            id={"Join random"}
                            sx={{ fontSize: 11.5, fontWeight: "bold", color: "black", borderRadius: 2,
                            backgroundColor: theme.palette.secondary.dark,
                            '&:hover':{backgroundColor: theme.palette.primary.dark,
                                color: theme.palette.primary.contrastText,
                            }}}>Join random</Button>
                        <Button
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