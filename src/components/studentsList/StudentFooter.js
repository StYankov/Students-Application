import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StudentFooter = ({ personalPresentation }) => (
    <Row className="item-footer">
        <Col className="personal-presentation-wrapper">
            <h3 className="text-center personal-presentation-title">Short Personal Presentation</h3>
            <p className="personal-presentation">
                {personalPresentation}
            </p>
        </Col>   
    </Row>
);

export default StudentFooter;