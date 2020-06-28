import React, { useState, useEffect } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './style.css';

var favs = JSON.parse(localStorage.getItem('favorites')) || [];

const FavButton = ({ idCity, setFavorites, favorites }) => {


    const toggleFavorite = () => {
        const check = favorites.filter(id => id === idCity);

        if (!check.length) {
            console.log('if');
            // no esta en favoritos
            setFavorites([...favorites, idCity]);       
        } else {
            console.log('else');
            // esta en favoritos
            let deleteFav = favorites.filter(id => id !== idCity);
            setFavorites(deleteFav);           
        }

    }

    return (
        <button
            className="favorite-button"
            onClick={toggleFavorite}
        >
            <FavoriteBorderIcon />
        </button>
    );
}

export default FavButton;