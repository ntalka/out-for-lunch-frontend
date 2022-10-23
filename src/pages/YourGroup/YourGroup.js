import {
    Box,
    Container,
    createTheme,
    CssBaseline,
    ThemeProvider
} from "@mui/material";
import {
    SingleGroupDropDown
} from "../../components/GroupDropDown/GroupDropDown";
import React from "react";
import {themeOptions} from "../../utils/Theme/ThemeOptions";

const theme = createTheme(themeOptions)

const YourGroup = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                </Box>
                <SingleGroupDropDown groupId={"testId"} time={"11:00"} placeId={"ChIJuy6UbDjfjkYRmI04K3dwVcs"} defaultOpen={true}/>
            </Container>
        </ThemeProvider>
    )
}
export default YourGroup;