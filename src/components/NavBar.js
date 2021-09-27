import React from 'react';

import './NavBar.css'

const NavBar = props => {
    return (
        <div className="main">
            <div>
                <h1>Meal Wheel</h1>
            </div>
            <div>
                <p className="link">Meals</p>
                <p className="link">Spin It!</p>
                <p className="link">Make It!</p>
            </div>
        </div>
    )
 };

export default NavBar;