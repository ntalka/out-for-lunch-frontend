import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import {Box, Button, Grid} from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from "@mui/material/Divider";
import {render} from "react-dom";


const testMap =[
    {groupId: "test1" , values: {placeId:"ravintola1", time: "11:00"} },
    {groupId: "test2" , values: {placeId:"ravintola2", time: "11:00"} },
    {groupId: "test3" , values: {placeId:"ravintola3", time: "11:00"} },
    {groupId: "test4" , values: {placeId:"ravintola4", time: "11:00"} },
    {groupId: "test5" , values: {placeId:"ravintola5", time: "11:00"} },
]



function SingleGroupDropDown({groupId, placeId, time, defaultOpen=false}){
    const [open, setOpen] = useState(defaultOpen);
    function toggleOpen(e){
        setOpen(!open);}

        return(
            <Grid xs={10} item >
                <Button
                    onClick={toggleOpen}
                    endIcon={open ? <ExpandLessIcon/> : <ExpandMoreIcon/> }>
                    {placeId} {time}
                </Button>
                {open &&

                    <Box>
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
                    <div>
                        <SingleGroupDropDown groupId={value.groupId} placeId={value.values.placeId} time={value.values.time}/>
                    </div>
                )
            })


        )

}