import React, { useState } from 'react';
import { Button, Box, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@material-ui/lab';
import cities from '../../_configs/city.list.min.json';

import './style.css';

const citiesList = cities.filter(city => city.country === 'AR');

const SearchBar = ({ search, setSearch, setConsult, setError }) => {

    const handleSubmit = e => {
        e.preventDefault();

        if(search === null) {
            setError(true);
            return;
        }

        setError(false);

        setConsult(true);
    }

    return (
        <Box
            className="search-bar-wrap"
            component='form'
            onSubmit={handleSubmit}
        >
            <Autocomplete
                multiple
                id="search"
                limitTags={2}
                options={citiesList}
                getOptionLabel={(option) => option.name}
                onChange={(e, targetValue) => {
                    setSearch(targetValue.map(city => city.id));
                }}
                renderInput={(params) => <TextField {...params} label="Ciudad/es" variant="outlined" />}
            />
            <Button
                variant="contained"
                color="default"
                type="submit"
            >
                <SearchIcon />
            </Button>
        </Box>
    );
}

export default SearchBar;