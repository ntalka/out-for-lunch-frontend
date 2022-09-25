import {
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";



/*
Burgermenu to be used with the appbar, contains links to app pages and
logout if person is logged in
TODO: Logout function, currently just refers to login
TODO: Check state if logout should be displayed
TODO: Possibly admin link
TODO: positioning, styling
-AK
 */
export default function BurgerMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                id="icon-button"
                aria-controls={open ? 'positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
            <MenuIcon />
            </IconButton>
            <Menu
                id="positioned-menu"
                aria-labelledby="positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem
                    component='a'
                    href="/Main"
                    >Main page
                </MenuItem>

                <MenuItem
                    component='a'
                    href="/profile"
                    >Profile
                </MenuItem>

                {/*TODO: LOGOUT FUNCTION*/}
                <MenuItem
                    component='a'
                    href="/Login"
                    >Log out
                </MenuItem>
            </Menu>
        </div>
    );
}