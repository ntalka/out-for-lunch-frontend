import React from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";



// test users
const testUsers =[
    {User: "User Tester1"},
    {User: "User Tester2"},
    {User: "User Tester3"},
    {User: "User Tester4"},
    {User: "User TesterTesterTester"},
    {User: "User Tester5"},
]

//Returns gridded participants to fit 2 per row
export function ParticipantList() {
    return(
        testUsers.map((value) => {
            return (
                <Grid key={value.User} item xs={6} justifyContent={"center"}>
                    <Typography align={"center"} color={"white"}>{value.User}</Typography>
                </Grid>
            )
        })
    )}


