import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {Card, Button} from '@mui/material'
import './style.css';

export const Details = () => {
    const history = useHistory();
    const {state} = useLocation();
    const handleClick = (json) => history.push('/details/weather', {state: json})
    const test = state;

    const getCountryWeather =(name) => {
        console.log(name)
        let url=`http://api.weatherstack.com/current?access_key=284eac672026d715648559b90c3acd66&query=${name}`
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            handleClick(json)
        })
        .catch((e) => {
            console.log(e)
        })
    }

    return (
        <div>
            {test.state.map((e) => {
                return (
                    <div className="card">
                        <Card>
                        <h2>Country: {e.name}</h2>
                        <p>Capital: {e.capital}</p>
                        <p>Population: {e.population}</p>
                        <p>latlng: {e.latlng}</p>
                        <div>
                        <img className="flag-image" src={e.flag} alt="flag" />
                        </div>
                        <br/><br/>
                        <Button variant="contained" onClick={() => getCountryWeather(e.capital)}>Capital Weather</Button>
                        <br/><br/>
                        </Card>
                    </div>
                )
            })}
        </div>
    )

}
