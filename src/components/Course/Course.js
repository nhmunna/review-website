import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const { name, text, img } = props.course;

    return (
        <div>
            <Col>
                <Card className="shadow bg-body rounded p-3">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;