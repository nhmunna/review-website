import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/teacher">Teachers</NavLink>
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="/about">About us</NavLink>
            </nav>
        </div>
    );
};

export default Header;