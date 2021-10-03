import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import img from "../../images/teacher1.jpeg";
import img1 from "../../images/teacher2.webp";

const Teachers = () => {
    return (
        <div className="my-5">
            <Container>
                <h2 className="text-success bg-light shadow-sm bg-body rounded my-5">These two teachers will be your instructor in our courses. They are highly qulalified. Hope! you will enjoy your courses.</h2>
                <Row>
                    <Col md={4} className="shadow bg-body rounded p-3">
                        <Image src={img} className="w-100" rounded></Image>
                        <h2>Prof Sarah Gilbert</h2>
                        <p>University of East Anglia</p>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }} className="shadow bg-body rounded p-3">
                        <Image src={img1} className="w-100" rounded></Image>
                        <h2>Prof Teresa Lambe</h2>
                        <p>University of East Anglia</p>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Teachers;