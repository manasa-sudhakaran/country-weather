import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {TextField, Button} from '@mui/material'
// import AlertTitle from '@mui/material/AlertTitle';
// import Stack from '@mui/material/Stack';

import './style.css'

export const Home = () => {
    const history = useHistory();
    const handleClick = (json) => history.push('/details', {state: json})


    const [countryName, setCountryName] = useState("");
    console.log(countryName);
    const [hasError, setHasError] = useState(false);

    const getCountryDetails = () => {
        let url=`https://restcountries.com/v2/name/${countryName}`;
        fetch(url)
        .then((response) => response.json())
        .then((json) =>{
            console.log(json);
            handleClick(json)
        })
        .catch((e) => {
            console.log(e)
            setHasError(true); 
            alert("No Data Found")
            history.replace('/', {})
            
            // history.replace('/');
            
            
        })
    }

    return(
        <div>
            <div className="first-page">
                
                <div className="input-country">
                <TextField id="outlined-basic" label="Enter Country" siz="small" fullWidth className="input-country" variant="outlined" onChange={(e) => setCountryName(e.target.value)} />
                </div>
                <br/>
                <br/>
                
                <Button variant="contained" className="button" color="primary" disabled={countryName.length < 1} onClick={() => getCountryDetails()}>Submit</Button>

                {hasError && <ErrorComponent></ErrorComponent>}

                
            </div>
            
        </div>
    )
}


function ErrorComponent () {
    return (<div><h5>No Data Found</h5></div>)
}

