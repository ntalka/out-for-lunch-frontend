import React from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {GetGroup} from "../../utils/Groups";
import {capitalizeName} from "../../utils/User";



//Returns gridded participants to fit 2 per row
export function ParticipantList(groupId) {
   const members = GetGroup(groupId.groupId)["groupMember"]
    return(
        members.map((value) => {
            return (
                <Grid key={"grid"+value["userId"]}
                      item xs={6}
                      justifyContent={"center"}>
                    <Typography
                        key={"typo"+value["userId"]}
                        align={"center"}
                        color={"white"}>
                        {capitalizeName(value["user"]["name"])}
                    </Typography>
                </Grid>
            )
        })
    )}


