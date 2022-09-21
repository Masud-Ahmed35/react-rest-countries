import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, capital, region, population, area, flags } = props.country;

    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Country Name: {name.common}</h2>
            <h4>Capital: {capital}</h4>
            <h5>Continent: {region}</h5>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;