import React from 'react'
import { Box } from '@material-ui/core';
import Result from '../../_components/Result'
import './style.css';

const ResultsList = ({ result, title, favorites, setFavorites }) => {
    return (
        <Box component="section" className="results-list-container">
            <h2>
                {title}
            </h2>
            <Box className="results-list-wrap">
                {
                    result.list && result.list.map(wheater => (
                        <Result
                            wheater={wheater}
                            key={wheater.id}
                            favorites={favorites}
                            setFavorites={setFavorites}
                        />
                    ))
                }
            </Box>
        </Box>
    );
}

export default ResultsList;