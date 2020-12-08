import React from 'react';

const Navbar = props => {

    return(
        <nav className="navbar" style={props.style}>
            <a className="navbar-brand navtext" href="#">Weather App</a>
        </nav>
    );
}

export default Navbar;