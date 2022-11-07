import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import {createTheme} from "@mui/material";
import {themeOptions} from "../../utils/Theme/ThemeOptions";


const theme = createTheme(themeOptions);




const filterData = (query, data) => {
    if (!query) {
        return data;
    } else {
        return data.filter((d) => d.toLowerCase().includes(query));
    }
};

const data = [
    "Paris",
    "London",
    "New York",
    "Tokyo",
    "Berlin",
    "Buenos Aires",
    "Cairo",
    "Canberra",
    "Rio de Janeiro",
    "Dublin"
];

const SearchBar = ({setSearchQuery}) => {
    return (
            <form>
                <TextField
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& > fieldset": {
                                borderColor: theme.palette.secondary.contrastText,
                                borderRadius : 3},
                        },
                        svg: {
                            color: '#ffffff' },
                        input: {
                            textAlign: "center",
                            color: '#ffffff' },
                    }}

                    id="search-bar"
                    className="text"
                    onInput={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                    label="Enter restaurant"
                    variant="outlined"
                    placeholder="Restaurant..."
                    size="small"
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon style={{ fill: "white" }} />
                </IconButton>
            </form>
    );
};

export default SearchBar;