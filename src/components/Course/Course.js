import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const { name, text, img, price } = props.course;

    return (
        <div>
            <Col>
            {/* add card to show data */}
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
                    <div className="d-grid gap-2">
                        <Link to="/courses">
                            <Button variant="warning w-100" size="lg">
                                Enroll Now
                            </Button>
                        </Link>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default Course;