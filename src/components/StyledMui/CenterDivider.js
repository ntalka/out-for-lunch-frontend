import {Divider} from "@mui/material";
import {themeOptions} from "../../utils/ThemeOptions";
import React from "react";

export function CenterDivider({marginTop = 2, marginBot = 2}) {
    return(
        <Divider
            style={{ maxWidth: 360}}
            justifycontent="center"
            variant="middle"
            sx={{
                marginTop: marginTop,
                marginBottom: marginBot,
                borderBottomWidth: 3,
                borderColor: themeOptions.palette.primary.light
        }}/>
         )
}