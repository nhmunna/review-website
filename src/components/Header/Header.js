import React from 'react';
import { Container, Image, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from "../../images/backtoschool.jpg";

const Header = () => {
    return (
        <div >
            <Navbar bg="light" expand="lg">
                <Container>
                    <nav className="mx-auto">
                        <NavLink className="mx-5 text-decoration-none text-dark" to="/home">Home</NavLink>
                        <NavLink className="mx-5 text-decoration-none text-dark" to="/teacher">Teachers</NavLink>
                        <NavLink className="mx-5 text-decoration-none text-dark" to="/courses">Courses</NavLink>
                        <NavLink className="mx-5 text-decoration-none text-dark" to="/about">About us</NavLink>
                    </nav>
                </Container>
            </Navbar>
            <Container>
                <Image src={img} className="w-100 img-fluid" fluid />
            </Container>
        </div>
    );
};

export default Header;