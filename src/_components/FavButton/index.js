import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './style.css';

const FavButton = ({ idCity, setFavorites, favorites }) => {

    const check = favorites.filter(id => id === idCity);

    const toggleFavorite = () => {

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
            {
                !check.length ?
                    <FavoriteBorderIcon />
                    :
                    <FavoriteIcon />
            }
        </button>
    );
}

export default FavButton;