import { Box, Divider} from "@mui/material";
import logo_white from '../../Material/huld_logo_white.svg';

/*
Simple HULD-logo middle-aligned banner element w/ divider to use at the
bottom of the site
Author:
Aleksi Karelius
 */

export function HuldBanner() {
    return (
        /* Centered banner, currently margined const 3 from top*/
        <Box margin="auto" justifyContent="center" sx={{ width: '100%', maxWidth: 350 }}>
            {/* Divider is just white, might be changed later to suit HULD
            colour scheme*/}
            <Divider variant="middle"
                     sx={{
                         marginTop:3,
                         borderBottomWidth: 3,
                        backgroundColor: "white"}}/>
            <Box alignContent='center'>
                <a href="https://huld.io">
                    <img alt="Huld company logo" src={logo_white} align='center' />
                </a>
            </Box>
        </Box>
    );
}