import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {themeOptions} from "../Theme/ThemeOptions";
const huldTheme = createTheme(themeOptions);

const NoPermission=()=>(

    <div>
        <ThemeProvider theme={huldTheme}>
            <CssBaseline/>
                <Typography variant={"h4"} textAlign={"center"} marginTop={5}>
                    You have no permission to view this page.
                    <div/>
                    <Link to="/login"> Return to login page</Link>
                </Typography>
        </ThemeProvider>
    </div>
    )

export default NoPermission;