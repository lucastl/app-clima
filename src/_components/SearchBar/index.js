import React, { useState } from 'react';
import { Button, Box, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@material-ui/lab';
import cities from '../../_configs/city.list.min.json';

import './style.css';

const citiesList = cities.filter(city => city.country === 'AR');

const SearchBar = () => {
    // eslint-disable-next-line
    const [city, setCity] = useState(null);

    return (
        <Box
            className="search-bar-wrap"
        >
            <Autocomplete
                multiple
                id="city"
                limitTags={3}
                options={citiesList}
                getOptionLabel={(option) => option.name}
                onChange={(e, targetValue) => {
                    setCity(targetValue);
                }}
                renderInput={(params) => <TextField {...params} label="Ciudad/es" variant="outlined" />}
            />
            <Button variant="contained" color="default">
                <SearchIcon />
            </Button>
        </Box>
    );
}

export default SearchBar;