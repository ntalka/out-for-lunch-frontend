import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import {Box, Button, Grid} from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Divider from "@mui/material/Divider";


const testMap =[
    {groupId: "test1" , values: {placeId:"ChIJuy6UbDjfjkYRmI04K3dwVcs", time: "11:00"} },
    {groupId: "test2" , values: {placeId:"ChIJR22IU1PfjkYRUdouAWl9Kkc", time: "11:15"} },
    {groupId: "test3" , values: {placeId:"ChIJydE9wKzYjkYR3LQAO8zeJ84", time: "11:30"} },
    {groupId: "test4" , values: {placeId:"ChIJK4E4X6vYjkYReCDV0hC2rS0", time: "11:45"} },
    {groupId: "test5" , values: {placeId:"ChIJ20XPZQHfjkYR3ffX3EPuqh8", time: "12:00"} },
]

const testLocation = {
    lat: 61.49925378109671,
    long: 23.776468082987602,
    address: "Itsenäisyydenkatu 3, 33100 Tampere, Suomi",
    placeid: "ChIJuy6UbDjfjkYRmI04K3dwVcs",
}

const testMyGroup = "test3";

function EmbedLink(placeId="ChIJuy6UbDjfjkYRmI04K3dwVcs"){
    return(
    "https://www.google.com/maps/embed/v1/place?" +
    "key=" + process.env.REACT_APP_GOOGLE_API_KEY +
    "&q=place_id:" + placeId +
    "&zoom=14"
)
}

function MapIframe({placeId}){
    return(
        <div align={"center"}>
            <iframe
                id={"embeddedMap"}
                title={"Restaurant map location"}
                src={EmbedLink(placeId)}
                width="300" height="300" frameBorder="0" style={{border: 0}}
                aria-hidden="false" tabIndex="0"/>
        </div>

    )
}

function JoinGroupSwitch({groupId}){
    return (
        <div/>
    )
}

export function SingleGroupDropDown({groupId, placeId, time, defaultOpen=false}){
    const [open, setOpen] = useState(defaultOpen);
    const [joined, setJoin] = useState(false);
    function toggleOpen(e){
        setOpen(!open);}

        return(
            <Grid item xs={11} marginBottom={0.5} >
                    <Button variant={"contained"}
                        fullWidth={true}
                        onClick={toggleOpen}
                        sx={{
                        color: "black",
                        backgroundColor: joined ? null : "#e3dbd0"}}
                     >
                        <Grid container>
                            <Grid item xs={6} >
                                <Typography align={"left"} color={"black"}>{groupId} </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <AccessTimeIcon />

                            </Grid>
                            <Grid item xs={2}>
                                <Typography color={"black"}>{time} </Typography>

                            </Grid>
                            <Grid item xs={1}>
                                <PeopleAltIcon/>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography align={"left"} color={"black"}>3 </Typography>

                            </Grid>
                            <Grid item xs={1}>
                                {open ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
                            </Grid>



                        </Grid>



                            </Button>


                {open &&

                    <Box>
                        <MapIframe placeId={placeId}/>
                        GroupId = {groupId}
                        <Divider  variant={"middle"}/>
                        <Typography>

                        </Typography>
                    </Box>



                }
            </Grid>
        )

}

export function AllGroupDropDown() {

        return(
            testMap.map((value, index) => {
                return (

                        <SingleGroupDropDown groupId={value.groupId} placeId={value.values.placeId} time={value.values.time}/>

                )
            })



)

}