import React from 'react'
import ResultsList from '../../_components/ResultsList';
import { Box } from '@material-ui/core';
import './style.css';

const Home = ({ result, favorites, setFavorites }) => {
    return (
        <>
            {
                Object.entries(result).length ?
                    <ResultsList
                        title={'Resultados'}
                        result={result}
                        favorites={favorites}
                        setFavorites={setFavorites}
                    />
                    : 
                    <p
                        className="no-search"
                    >
                        Realiza una consulta para obtener resultados...
                    </p>
            }
        </>
    );
}

export default Home;