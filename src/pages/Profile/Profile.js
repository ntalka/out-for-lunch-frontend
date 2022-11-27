import React, {useEffect} from 'react';
import {
    Autocomplete,
    Box,
    Button,
    Container, createTheme,
    CssBaseline, Divider, FormControl,
    ThemeProvider
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {themeOptions} from "../../utils/ThemeOptions";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../utils/Authenticate";
import {getRequest} from "../../utils/RequestUtils";
import TextField from "@mui/material/TextField";

const theme = createTheme(themeOptions);



const Profile = () => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const [location, setLocation] = React.useState();
    const [offices, setOffices] = React.useState();
    const [currentOffice] = React.useState(JSON.parse(sessionStorage.getItem("userInfo"))["officeId"])

    // handle autocomplete change to get value
    const handleAutoChange = (event, value) => setLocation(value);

    // fetch office locations
    useEffect(()=>{
        if(!offices){
            getRequest("/get-offices-list", String(user))
                .then((resJSON)=>{
                    if(resJSON){
                        let data =[];
                        resJSON["data"].map((value) =>{
                            let option={
                                label: value["name"],
                                id: value["id"]
                            }
                            if(option.id === currentOffice){
                                setLocation(option)
                            }
                            data.push(option);
                            return true
                        })
                        setOffices(data);
                    }
                })
        }
    })

    // save current settings
    // TODO: There's no endpoint for changing the office
    function saveSettings() {
        let currentInfo = JSON.parse(sessionStorage.getItem("userInfo"));
        currentInfo["officeId"] = {location}["location"]["id"];
        sessionStorage.setItem("userInfo", JSON.stringify(currentInfo));
        navigate("/main")
    }

    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box margin="auto" textAlign='center'  justifycontent="center" sx={{ width: '100%', maxWidth: 360 }}>
                    <Typography  fontSize={25} textAlign={"center"} > Your Profile</Typography>
                    <Divider  justifycontent="center" variant="middle" sx={{borderBottomWidth: 3}}/>
                    <Typography> Currently selected office: </Typography>
                    <FormControl  sx={{  minWidth: 200, marginBottom: 2, marginTop: 1., borderRadius: 2,
                            backgroundColor: theme.palette.secondary.dark,
                            '&:hover':{backgroundColor: theme.palette.primary.dark,
                                color: theme.palette.primary.contrastText}}}>
                        {offices &&
                            <Autocomplete
                            disablePortal
                            variant={"outlined"}
                            id="officeSelector"
                            value={location}
                            options={offices}
                            isOptionEqualToValue={(option, value) => option.value === value.value}
                            /* Currently, value on console */
                            onChange={handleAutoChange}
                            sx={{
                            width: 320,
                            svg: {
                            color: '#ffffff' },
                            input: {
                            color: '#ffffff' },
                        }}
                            renderInput={(params) => <TextField {...params}  />}
                            />
                        }
                    </FormControl>
                    <Divider  justifycontent="center" variant="middle" sx={{borderBottomWidth: 3}}/>

                    <Button onClick={saveSettings} to="/main" sx={{ marginTop: 5, marginBottom: -25}}
                            >Back to main page </Button>
                </Box>
            </Container>
        </ThemeProvider>

    );

};

export default Profile;