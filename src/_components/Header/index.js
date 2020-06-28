import React from 'react'
import { Box } from '@material-ui/core';
import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';

import './style.css';

const Header = ({ title, search, setSearch, setConsult, setError }) => {

    return (
        <Box
            component="header"
            className="header-wrap"
        >
            <h1
                style={{
                    color: 'rgba(255,255,255,.9)',

                }}
            >
                <Link to={'/'}>
                    {title}
                </Link>
            </h1>
            <nav>
                <Link to={'/'}>
                    Consultar
                </Link>
                <Link to={'/favoritos'}>
                    Favoritos
                </Link>
            </nav>
            <SearchBar
                setSearch={setSearch}
                search={search}
                setConsult={setConsult}
                setError={setError}
            />
        </Box>
    );
}

export default Header;