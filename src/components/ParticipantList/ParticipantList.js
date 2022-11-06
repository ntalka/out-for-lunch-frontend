import React from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {GetGroup} from "../../utils/Groups/Groups";



//Returns gridded participants to fit 2 per row
export function ParticipantList(groupId) {
   const members = GetGroup(groupId.groupId)["groupMember"]
    return(
        members.map((value) => {
            return (
                <Grid key={value.user.id}
                      item xs={6}
                      justifyContent={"center"}>
                    <Typography
                        align={"center"}
                        color={"white"}>
                        {value.user.name}
                    </Typography>
                </Grid>
            )
        })
    )}


