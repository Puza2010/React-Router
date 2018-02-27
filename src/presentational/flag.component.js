import React from 'react';

const CountryFlag = (props) => (
    <div className="country-logo-wrapper">
        <img height={100} width={200} border="1 solid black" className="country-logo" src={props.country.imageUrl} alt="country photo" />
    </div>
);

export default CountryFlag;