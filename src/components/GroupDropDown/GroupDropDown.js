import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import {Box, Button} from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from "@mui/material/Divider";


function GroupDropDown({groupId, placeId, time, defaultOpen=false}){
    const [open, setOpen] = useState(defaultOpen);
    function toggleOpen(e){
        setOpen(!open);}
    return(
        <div >
            <Button
            onClick={toggleOpen}
            endIcon={open ? <ExpandLessIcon/> : <ExpandMoreIcon/> }>
            DEMO
            </Button>
            {open &&

                <Box>
                    <Divider  variant={"middle"}/>
                <Typography>

                </Typography>
                </Box>



            }

        </div>
    )
}

export default function AllGroupDropDown(){

}