import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Course = (props) => {
    const { name, text, img, price } = props.course;

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
                        <div className="d-flex justify-content-between">
                            <h2 className="text-warning">{price}</h2>
                            <Rating
                                emptySymbol="fas fa-star fas-2x"
                                fullSymbol="far fa-star far-2x"
                                readonly
                                className="text-warning"
                            />
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;