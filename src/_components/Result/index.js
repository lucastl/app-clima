import React from 'react'
import { Card, CardContent } from '@material-ui/core';
import './style.css';
import FavButton from '../FavButton';

const Result = ({ wheater, favorites, setFavorites }) => {
    return (
        <Card className="result-wrap" bg="default">
            <CardContent>
                <FavButton
                    idCity={wheater.id}
                    favorites={favorites}
                    setFavorites={setFavorites}
                />
                <div className="primary-info">
                    <h3>{wheater.name}</h3>
                </div>
                <div className="secondary-info">
                    <strong>
                        {wheater.main.temp} &#8451;
                    </strong>
                    <small>Min: {wheater.main.temp_min}</small>
                    {' - '}
                    <small>Max: {wheater.main.temp_max}</small>
                </div>
            </CardContent>
        </Card>
    );
}

export default Result;