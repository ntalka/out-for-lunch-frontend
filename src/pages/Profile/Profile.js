import React, {useEffect} from 'react';
import {
    Autocomplete,
    Box,
    Button,
    Container, createTheme,
    CssBaseline, FormControl,
    ThemeProvider
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {themeOptions} from "../../utils/ThemeOptions";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../utils/Authenticate";
import {getRequest} from "../../utils/RequestUtils";
import TextField from "@mui/material/TextField";
import {changeLocation} from "../../utils/User";
import {CenterDivider} from "../../components/StyledMui/CenterDivider";

const theme = createTheme(themeOptions);



const Profile = () => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const [location, setLocation] = React.useState();
    const [offices, setOffices] = React.useState();
    const [userInfo] = React.useState(!sessionStorage.getItem("userInfo") ? localStorage.getItem("userInfo") : sessionStorage.getItem("userInfo"))
    const userJson = JSON.parse(userInfo);
    const [currentOffice] = React.useState(JSON.parse(userInfo)["officeId"])

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
                                id: value["id"],
                                coord: value["location"]
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
    async function saveSettings() {
        await changeLocation({location}["location"]["id"], {location}["location"]["coord"])
        navigate("/main")
    }

    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box margin="auto" textAlign='center'  justifycontent="center" sx={{ width: '100%', maxWidth: 360 }}>
                    <Typography  fontSize={25} textAlign={"center"} > Your Profile</Typography>
                    <CenterDivider/>
                    <Typography variant={"h5"}> Currently selected office: </Typography>
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
                                        color: '#ffffff'
                                    },
                                    input: {
                                        color: '#ffffff'
                                    },
                                }}
                                renderInput={(params) =>
                                    <TextField {...params}  />}
                            />
                        }
                    </FormControl>
                    {offices &&
                        <Button onClick={saveSettings} to="/main" >
                        Save changes </Button>
                    }
                    <CenterDivider/>
                    <Typography variant={"h5"}> User info: </Typography>
                    <Typography variant={"subtitle1"}>
                        <p>{userJson["name"]}</p>
                        <p>{userJson["email"]}</p>
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>

    );

};

export default Profile;