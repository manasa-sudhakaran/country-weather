import React from 'react';
import { useLocation} from'react-router-dom';
import {Card} from '@mui/material'

export const Weather = () => {
    const { state} = useLocation();
    const test= state;

    return (
        <div>
            <div className="card">
                <Card variant="outlined">
            <h1>Capital: {test.state.location.name}</h1>
            <p>Temperature:{test.state.current.temperature} </p>
            <p>Wind Speed: {test.state.current.wind_speed}</p>
            <p>Precip: {test.state.current.precip}</p>
            <img src={test.state.current.weather_icons} className="image" alt="weather-icon" />
            <br/><br/>
            </Card>
            </div>

        </div>
    )
}