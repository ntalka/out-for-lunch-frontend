import { Box, Divider} from "@mui/material";
import logo_white from '../../material/huld_logo_white.svg';
import {CenterDivider} from "../StyledMui/CenterDivider";

/*
Simple HULD-logo middle-aligned banner element w/ divider to use at the
bottom of the site
Author:
Aleksi Karelius
 */

export function HuldBanner() {
    return (
        /* Centered banner, currently margined const 3 from top*/
        <Box alignItems={"center"} margin="auto" marginTop= {6} justifyContent="center" >
            <CenterDivider/>
            <Box alignContent='center'>
                <a href="https://huld.io">
                    <img alt="Huld company logo" src={logo_white} align='center' />
                </a>
            </Box>
        </Box>
    );
}