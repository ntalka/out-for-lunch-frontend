import * as React from 'react';
import Typography from "@mui/material/Typography";
import { Grid, ListItemText} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


const testRestaurantInfo={
    name: "TestiRavintola pitkä nimi",
    time: "11:00",
    ppl: 55,
}

/* Restaurant infobutton, to show your selected restaurant for the group,
time and number of participants
TODO: functionality, currently static
- AK
* */
export function RestaurantInfoButton() {
    return(

            <ListItemText>
                <Typography variant={"body1"} width={"100%"} textAlign={"center"} >Your group:</Typography>
                <Typography variant={"body2"} width={"100%"} textAlign={"center"} >{testRestaurantInfo.name}</Typography>

                {/*Using grid to easily fit icons and text, can be changed as
                necessary*/}
                <Grid marginTop={1} paddingLeft={2} container >
                    <Grid item xs={1}>
                        <AccessTimeIcon/>
                    </Grid>
                    <Grid paddingLeft={4}  item xs={11}>
                        <Typography textAlign={"left"} > {testRestaurantInfo.time}</Typography>
                    </Grid>
                    <Grid  item xs={1}>
                        <PeopleAltIcon/>
                    </Grid>
                    <Grid paddingLeft={4} item xs={11}>
                        <Typography textAlign={"left"} > {testRestaurantInfo.ppl}</Typography>
                    </Grid>
                </Grid>
            </ListItemText>






    );

}
