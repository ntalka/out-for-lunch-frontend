import * as React from 'react';
import Typography from "@mui/material/Typography";
import { Grid, ListItemText} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {useState} from "react";



/* Restaurant infobutton, to show your selected restaurant for the group,
time and number of participants
- AK
* */
export function RestaurantInfoButton() {
    let myGroup;
    try{
         myGroup = JSON.parse(sessionStorage.getItem("myGroup"));
    }
    catch (e){
        myGroup = null;
    }


    const [groupId, ] = useState(myGroup ? myGroup["id"] : "null");
    const [name, ] = useState(myGroup ? myGroup["restaurant"] : null);
    //const [restaurantId, ] = useState(myGroup ? myGroup["restaurantId"] : null);
    const [participants, ] = useState(myGroup ? myGroup["participants"] : null);
    const [time, ] = useState(myGroup ? myGroup["time"] : null);
    const [hidden, ] = useState(groupId!=="null");

    return(
        <>
            <ListItemText>
                <Typography variant={"body1"} width={"100%"} textAlign={"center"} >Your group:</Typography>
                {hidden &&
                    <Typography variant={"body2"} width={"100%"}
                                textAlign={"center"}>{name}</Typography>
                }
                {/*Using grid to easily fit icons and text, can be changed as
                necessary*/}
                <Grid marginTop={1} paddingLeft={2} container >
                    <Grid item xs={1}>
                        <AccessTimeIcon/>
                    </Grid>
                    <Grid paddingLeft={4}  item xs={11}>
                        {hidden &&
                            <Typography textAlign={"left"}> {time}</Typography>
                        }
                    </Grid>
                    <Grid  item xs={1}>
                        <PeopleAltIcon/>
                    </Grid>
                    <Grid paddingLeft={4} item xs={11}>
                        {hidden &&
                            <Typography
                                textAlign={"left"}> {participants}</Typography>
                        }
                    </Grid>
                </Grid>
            </ListItemText>
        </>







    );

}
