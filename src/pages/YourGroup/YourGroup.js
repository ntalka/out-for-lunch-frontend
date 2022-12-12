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
import {themeOptions} from "../../utils/ThemeOptions";

const theme = createTheme(themeOptions)

const YourGroup = () => {
    let myGroup;
    try{
        myGroup = JSON.parse(sessionStorage.getItem("myGroup"));
    }
    catch (e){
        myGroup = null;
    }
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
                {myGroup &&
                <SingleGroupDropDown
                    groupData={myGroup}/>
                }
            </Container>
        </ThemeProvider>
    )
}
export default YourGroup;