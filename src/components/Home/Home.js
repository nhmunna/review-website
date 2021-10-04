import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';


const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div className="my-4">
            <Container>
                <h2 className="text-primary bg-light shadow-sm bg-body rounded">We teach various Mathematics Courses. Here you can see on those</h2>
                <Row xs={1} md={2} className="g-4 my-4">
                    {
                        courses.slice(0, 4).map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </Row>
                <Link to="/courses" className="text-decoration-none text-dark">
                    <h5 >see more</h5>
                </Link>
            </Container>
        </div>
    );
};

export default Home;