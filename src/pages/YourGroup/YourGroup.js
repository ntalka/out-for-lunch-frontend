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
import {useState} from "react";

const theme = createTheme(themeOptions)

const YourGroup = () => {
    let myGroup;
    try{
        myGroup = JSON.parse(sessionStorage.getItem("myGroup"));
    }
    catch (e){
        myGroup = null;
    }
    const [groupId] = useState(myGroup ? myGroup["id"] : "null");
    const [name] = useState(myGroup ? myGroup["restaurant"] : null);
    const [restaurantId] = useState(myGroup ? myGroup["restaurantId"] : null);
    const [participants] = useState(myGroup ? myGroup["participants"] : null);
    const [time] = useState(myGroup ? myGroup["time"] : null);
    //const [hidden, setHidden] = useState(groupId!=="null");

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
                    key={groupId}
                    groupId={groupId}
                    placeId={restaurantId}
                    placeName={name}
                    nParticipants={participants}
                    time={time}
                    defaultOpen={true}/>
                }
            </Container>
        </ThemeProvider>
    )
}
export default YourGroup;