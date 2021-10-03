import React from 'react';
import { Col, Container, Image, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from "../../images/backtoschool.jpg";

const Header = () => {
    return (
        <div >
            <Navbar bg="light" expand="lg">
                <Container>
                    <nav className="mx-auto">
                        <NavLink className="mx-5 text-decoration-none" to="/home">Home</NavLink>
                        <NavLink className="mx-5 text-decoration-none" to="/teacher">Teachers</NavLink>
                        <NavLink className="mx-5 text-decoration-none" to="/courses">Courses</NavLink>
                        <NavLink className="mx-5 text-decoration-none" to="/about">About us</NavLink>
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