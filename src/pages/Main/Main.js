import './Main.css'
import {
    Box,
    Container,
    createTheme,
    CssBaseline, Grid,
    ThemeProvider
} from "@mui/material";
import {themeOptions} from "../../utils/Theme/ThemeOptions";
import TimeSelector from "../../components/TimeSelector/TimeSelector";
import {RenderDropDowns} from "../../components/GroupDropDown/GroupDropDown";

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
                    <Grid container justifyContent={"center"}>
                        <RenderDropDowns/>
                    </Grid>

            </Box>
            </Container>
        </ThemeProvider>
            );

}