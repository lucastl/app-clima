import React, { useState, useEffect } from 'react';
import { GLOBAL } from '../../_configs/global';

import './style.css';
import ResultsList from '../ResultsList';

const Favorites = ({ title, favorites, setFavorites }) => {

    const [result, setResult] = useState({});

    useEffect(() => {

        const consultFavs = async (idCities) => {

            if (idCities.length) {

                const url = `${GLOBAL.API_URL}${idCities.join()}&units=metric&appid=${GLOBAL.API_KEY}`;

                const response = await fetch(url);
                const result = await response.json();

                setResult(result);
            }

        }
        consultFavs(favorites);
    }, [favorites]);

    return (
        Object.entries(result).length ?
            <ResultsList
                result={result}
                title={title}
                favorites={favorites}
                setFavorites={setFavorites}
            />
            :
            <p
                className="no-favorites"
            >
                No se encontraron resultados en favoritos.
            </p>
    );
}

export default Favorites;