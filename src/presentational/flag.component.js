import React from 'react';
import styles from './flag.css';

const CountryFlag = (props) => (
    <div className={styles.flag}>
        <div className="country-logo-wrapper">
            <img className="country-logo" src={props.country.imageUrl} alt="country photo" />
        </div>
    </div>
);

export default CountryFlag;