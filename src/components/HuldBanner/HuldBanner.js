import { Box, Divider, Link} from "@mui/material";
import logo_white from '../../Material/huld_logo_white.svg';

/*
Simple HULD-logo middle-aligned banner element w/ divider to use at the
bottom of the site

TODO Link logo to huld website
Author:
Aleksi Karelius
 */

export function HuldBanner(p) {
    return (
        <Box sx={{ width: '100%', maxWidth: 600 }}>
            <Box sx={{ my: 3, mx: 2 }}>
            </Box>
            <Divider variant="middle"
                     sx={{ borderBottomWidth: 3 }}/>
            <Box sx={{ m: 0 }} alignContent='center'>
                <img src={logo_white} align='center' />
            </Box>
        </Box>
    );
}