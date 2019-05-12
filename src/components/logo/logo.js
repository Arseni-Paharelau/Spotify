import React from 'react';
import logo from './logo.png';

function Logo() {
    return (
        <div>
            <img src={logo} alt="Spotify Search"></img>
            <div>Spotify Search</div>
        </div>
    );
}

Logo.propTypes = {};
Logo.defaultProps = {};

export default Logo;