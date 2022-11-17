import {ThemeOptions} from "@mui/material";

// Huld Colors, as taken from brand book:
// The main colors have a primary role when using colors. The additional colors are used as an accent to com-
// plement the main colors. The use of colors in relation to each other should be so that the main colors have
// the main role (e.g., bigger areas, used more often, etc.), and the additional colors are used more advisedly.

// The Main Colors
// EXPERT #00173a
// INTELLIGENT #0047f2
// HUMANE #e3dbd0
// OBJECTIVE #ffffff

// Additional Colours
// BOLD #ff5e89
// #80a4ff
// #c2d1fa


export const themeOptions: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: '#80a4ff',
            light: '#e3dbd0',
            dark: '#0047f2',
            contrastText: "#000000"
        },
        secondary: {
            main: '#ff5e89',
            light: '#c2d1fa',
            dark: '#80a4ff',
            contrastText: '#ffffff',
        },
        text: {
            primary: '#fff6f6',
            secondary: '#fff6f6',
            disabled: '#000000',
            Hint: '#fff6f6',
        },
        background: {
            default: '#00173a',
            paper: '#e3dbd0',
        },
        divider: '#ffffff',
    },


    components: {
        MuiTextField: {
            styleOverrides: {
                root:{
                    "& .MuiOutlinedInput-root": {
                        "& > fieldset": {
                            borderColor: '#ffffff',

                        },

                    },

                }
            }

        },
        MuiButton:{
            styleOverrides: {

                root: {
                    '&:hover': {
                        backgroundColor: '#0047f2',
                        color: '#000000',
                    },

                    fontSize: 11.5,
                    fontWeight: "bold",
                    color: "black",
                    backgroundColor: '#80a4ff'

                }
            }
        },


        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor:"#80a4ff",
                    text:{
                        primary:"#e3dbd0",
                        secondary:"#e3dbd0"
                    }


                },
                text:{
                    primary:"#e3dbd0",
                    secondary:"#e3dbd0"
                }
            },
        },
        MuiClock:{
            styleOverrides: {
                root:{
                    backgroundColor: "#80a4ff"
                }
            }
        },
        MuiClockNumber:{
            styleOverrides:{
                root:{
                    Mui:{
                      disabled: {
                          color:"#fffffff"
                      }
                    },
                    //backgroundColor:"#9F2B68"

                }
            }
        }
    },
};
