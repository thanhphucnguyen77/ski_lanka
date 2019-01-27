import React from 'react';

const Header = (props) => {
    return (
        <div>
            <header style={{maxWidth: "1000px", margin: "0 auto", position: "relative"}}>
                <img className="logo" src={require('../image/ECO_LOGO.png')} width="50" height="50" />

                <nav className="authentication">
                <a href="#">Login</a>
                <a href="#">Register</a>
                </nav>
          </header>
        </div>

    )
}

export default Header