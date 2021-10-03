import React from 'react';
import { Container } from 'react-bootstrap';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div className="my-4">
            <Container>
                <h2 className="text-primary bg-light shadow-sm bg-body rounded">We teach various Mathematics Courses. Here you can see on those</h2>
                <Courses></Courses>
            </Container>
        </div>
    );
};

export default Home;