import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import {createTheme, Grid, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useCallback, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {RestaurantInfoButton} from "../RestaurantInfoButton/RestaurantInfoButton"

import {themeOptions} from "../../utils/ThemeOptions";
import {useAuth} from "../../utils/Authenticate";

const drawerWidth = 150;
const huldTheme = createTheme(themeOptions);




/*
App bar for the top of the web app, contains app name and drawermenu component
TODO: burgermenu component functions
-AK
 */
const TopAppBar =() => {
    /*
    Anchors and toggles for the hamburgermenu-button -AK
     */
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);
    function toggleDrawer() {setAnchorEl(!open)}

    const {user, setUser } = useAuth();
    const navigate = useNavigate();

    // Logout functionality -AK
    const logout = useCallback(
        (e) => {
            e.preventDefault();
            setUser(null);
            sessionStorage.clear();
            localStorage.clear();
            setAnchorEl(false);
            navigate("/login");
        },
        [setUser, navigate]
    );

    return (
        <div>
            <AppBar
                /*
                Fixing drawer to be under appbar
                Fixing Appbar styling to fit ui-goal -AK
                 */
                position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 ,
                backgroundColor: huldTheme.palette.background.paper,
                color: huldTheme.palette.text.disabled,}}>
                <Toolbar>
                    <Grid
                        /*Grid containing out-for-lunch tittle and hamburgermenu,
                        gridding for ease of alignment -AK
                        */
                        container alignItems="center" spacing={0}>
                        <Grid item xs={2}>
                            {/*Show button only for logged users*/}
                            {user &&
                            <IconButton
                                id="icon-button"
                                onClick={toggleDrawer}>
                                <MenuIcon/>
                            </IconButton>}
                        </Grid>

                        <Grid item xs={8}>
                            <Typography variant="h6" align="center">
                                Out for lunch
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
                /*
                Fixing drawer styleprops to fit ux-goals -AK
                 */
                PaperProps={{sx: {
                        backgroundColor: huldTheme.palette.background.paper,
                        color: huldTheme.palette.text.disabled,}}}
                /*
                 Using left anchoring temporary variant, width previously defin.
                  const -AK
                 */
                variant="temporary"
                sx={{[`& .MuiDrawer-paper`]: { width: drawerWidth}}}
                anchor='left' open={anchorEl} onClose={toggleDrawer}>
                <Toolbar />
                <Box  >

                    <List
                        /* Listing menuitems, using router-dom to link
                        TODO: More dynamic creation of list
                         */
                    >
                        <ListItemButton  component={Link} onClick ={toggleDrawer} to="/main">
                            <Typography width={"100%"} textAlign={"center"}> Main page</Typography>
                        </ListItemButton>


                        <Divider variant="middle"
                                 sx={{borderBottomWidth: 2}}/>

                        <ListItemButton component={Link} onClick ={toggleDrawer} to="/profile">
                            <Typography width={"100%"} textAlign={"center"}> Profile</Typography>
                        </ListItemButton>

                        <Divider variant="middle"
                                 sx={{borderBottomWidth: 2}}/>

                        {/*TODO: currently nonfunctional / static proof of concept*/}
                        <ListItemButton
                            disabled={sessionStorage.getItem("myGroup")===null }
                            component={Link} onClick ={toggleDrawer} to="/yourGroup">
                            <RestaurantInfoButton/>
                        </ListItemButton>


                        <Divider variant="middle"
                                 sx={{borderBottomWidth: 2}}/>

                        {/*TODO: Switching between login / log out*/}
                        <ListItemButton onClick ={logout}>
                            <Typography width={"100%"} textAlign={"center"}> Log out</Typography>
                        </ListItemButton>
                    </List>
                    <Divider
                    />
                </Box>
            </Drawer>
            <Toolbar />
        </div>
    );
}
export default TopAppBar;