import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    // load data
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div >
            <Container className="bg-light bg-gradient shadow rounded">
                {/* showing data */}
                <Row xs={1} md={2} className="g-4 my-4">
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Courses;