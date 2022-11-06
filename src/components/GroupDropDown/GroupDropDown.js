import React, {useEffect, useState, useRef} from 'react';
import Typography from "@mui/material/Typography";
import {Box, Button, Grid, Switch} from "@mui/material";
import Divider from "@mui/material/Divider";


//Icon imports
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import {ParticipantList} from "../ParticipantList/ParticipantList";
import {GetAllGroups, GetGroup} from "../../utils/Groups/Groups";




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


// Returns single dropdownmenu component as a grid item xs=11. Requires vars defined.
// - AK
export function SingleGroupDropDown({groupId, placeName, placeId, time, nParticipants, defaultOpen=false}){
    const dropMenu = useRef(null)
    const dropMenuButton = useRef(null)
    const [open, setOpen] = useState(defaultOpen);
    const [joined, setJoin] = useState(parseInt(sessionStorage.getItem("groupid"))===groupId);
    const [myGroup, setMyGroup] = useState(parseInt(sessionStorage.getItem("groupid")));
    const [joinedColor, setJoinedColor] = useState(myGroup===groupId ? null : "#e3dbd0");
    function toggleOpen(e) {
        setOpen(!open);
    }

    // To close all other dropdown menus
    const closeOpenDropDown = (e)=>{
        console.log("firing closeOpenDropDown")
        if(dropMenu.current && open && !dropMenu.current.contains(e.target)){
            setOpen(false)
        }
    }
    // set colour of the button to reflect join status
    const setChosenColor = (e) =>{
        console.log("firing setChosenColor")
        if(parseInt(sessionStorage.getItem("groupid"))===groupId){setJoinedColor("#80a4ff")}
        else{
            setJoinedColor("#e3dbd0");
        }
    }

    // Handling joining and leaving particular group
    function handleJoin(e){
        if(!joined){
            setMyGroup(groupId);
            sessionStorage.setItem("groupid", String(groupId));
        }
        else{
            setMyGroup(null);
            sessionStorage.removeItem("groupid");
            sessionStorage.removeItem("myGroup")
        }
        setJoin(!joined);


    }

    function localStorageInfo(e) {

        const groupid = parseInt(sessionStorage.getItem("groupid"));
        if (groupid) {
            console.log("firing groupinfo")
            const group = GetGroup(groupid);
            const groupinfo = {
                "id" : group["id"],
                "restaurant" : group["restaurant"]["name"],
                "restaurantId" : group["restaurantId"],
                "participants" : group["groupMember"].length,
                "time": "11:00"

            };

            sessionStorage.setItem("myGroup", JSON.stringify(groupinfo));
        }
    }

    // sync joining
    useEffect(() => {
        setMyGroup(parseInt(sessionStorage.getItem("groupid")))
        setJoin(groupId===myGroup);
    }, [sessionStorage.getItem("groupid")]);

    // Closing dropdown menu on clicks outside / clicking other button
    // Colouring right button on changes
    useEffect(() => {
        document.addEventListener("mouseup", closeOpenDropDown);
        document.addEventListener("input", setChosenColor);
        document.addEventListener("input", localStorageInfo);
        return () => {

        };
    }, );



        return(
            <Grid item xs={11} marginBottom={0.5} ref={dropMenu}>
                    <Button variant={"contained"} ref={dropMenuButton}
                        fullWidth={true}
                        onClick={toggleOpen}

                        //BG colour will depend on join status, currently nulled
                        sx={{
                        color: "black",
                        backgroundColor: joinedColor}}>

                        {/*Gridded button info contents to assure easier time
                        aligning via proportions -AK */}
                        <Grid container>
                            <Grid item xs={6} >
                                <Typography align={"left"} color={"black"}>{placeName} </Typography>
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
                                <Typography align={"left"} color={"black"}>{nParticipants} </Typography>
                            </Grid>

                            <Grid item xs={1}>
                                {open ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
                            </Grid>
                        </Grid>
                    </Button>

                {/*Contents of the dropdown menu, hidden if !open */}
                {open &&
                    <Box marginTop={2} >

                        {/*Group Joining*/}
                        <div>
                            <Typography variant={"h6"} align={"center"}>Join this Group?
                                <Switch
                                checked={groupId===myGroup}
                                onChange={handleJoin}
                                >
                                </Switch>
                            </Typography>

                        </div>
                        <Divider  variant={"middle"} sx={{
                            margin:1,
                            borderBottomWidth: 2,
                            backgroundColor: "#e3dbd0"}}/>

                        {/*Google Map Embed*/}
                        <MapIframe placeId={placeId}/>
                        <Divider  variant={"middle"} sx={{
                            margin:1,
                            borderBottomWidth: 2,
                            backgroundColor: "#e3dbd0"}}/>

                        {/*Participant info*/}
                        <Typography variant={"h6"} align={"center"}>Participants</Typography>

                        <Grid marginY={2} container justifyContent={"center"} spacing={0} >
                            <ParticipantList groupId={groupId}/>
                        </Grid>
                    </Box>
                }
            </Grid>
        )
}

// Dynamically create and return dropdown menus from map
function AllGroupDropDown({groups}) {
    return (
            groups.map((value) => {
                const id = value["id"];
                const oId = value["officeId"];
                const rName = value["restaurant"]["name"];
                const rId = value["restaurantId"];
                const nP = value["groupMember"].length;

                return (
                    <SingleGroupDropDown
                        key={id}
                        groupId={id}
                        placeId={rId}
                        placeName={rName}
                        nParticipants={nP}
                        time={"11:00"}/>)})
)
}

// function to render DropDowns so that data is fetched
// and components are shown after loading
export function RenderDropDowns() {
    const  [didMount, setDidMount] = useState(false);
    const [groups, setGroups] = useState();

    useEffect(()=>{
        if(!didMount) {
            GetAllGroups().then(r => {
                console.log("groups fetched")
                setGroups(JSON.parse(sessionStorage.getItem("groups")))
                setDidMount(true);
            })
        }
    })

    return (<>
        {groups &&
        <AllGroupDropDown groups ={groups}/>
}
    </>);


}


