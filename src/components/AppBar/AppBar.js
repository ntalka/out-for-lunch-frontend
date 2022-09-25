import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {createTheme} from "@mui/material";
import {themeOptions} from "../Theme/ThemeOptions";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const theme = createTheme(themeOptions);

/*
App bar for the top of the web app, contains app name and burgermenu
TODO: Better positioning, styling, burgermenu component functions
-AK
 */
export default function TopAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <BurgerMenu>
                    </BurgerMenu>
                    <Typography variant="h6" component="div" align="center" sx={{ flexGrow: 1 }}>
                        Out for lunch
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


