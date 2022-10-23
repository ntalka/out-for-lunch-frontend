import React from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {SingleGroupDropDown} from "../GroupDropDown/GroupDropDown";


const testUsers =[
    {User: "Tommi Linkinen"},
    {User: "Aleksi Karelius"},
    {User: "Ville Herajärvi"},
    {User: "Zeba Ramzan"},
    {User: "Muhammad Arslan Shahab"},
    {User: "Ahmad Imam"},
]


export function ParticipantList() {

    return(
        testUsers.map((value, index) => {
            return (
                <Grid item xs={6} justifyContent={"center"}>
                    <Typography align={"center"} color={"white"}>{value.User}</Typography>
                </Grid>

            )
        })
    )}


