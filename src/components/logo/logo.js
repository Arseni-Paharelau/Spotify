import React from 'react';
import logo from './logo.png';
import './logo.scss';

function Logo() {
    return (
        <h1 className="logo">
            <img src={logo} alt="Spotify Search"></img>
            Spotify Search
        </h1>
    );
}

Logo.propTypes = {};
Logo.defaultProps = {};

export default Logo;