import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfoRow from './InfoRow'; 

const StudentBody = ({ data }) => (
    <Row className="item-body">
        <Col md={4}>
            <div className="personal-information">
                <InfoRow
                    label="Email"
                    value={data.email}
                />
                <InfoRow
                    label="Age"
                    value={data.age}
                />
                <InfoRow
                    label="Phone"
                    value={data.phone}
                />
            </div>
        </Col>

        <Col md={3}>
            <div className="technical-information">
                <InfoRow
                    label="Preffered way of communication"
                    value={data.communicationWay}
                />

                <InfoRow
                    label="English level"
                    value={data.englishLevel}
                />

                <InfoRow
                    label="Available to Start"
                    value={data.startDate}
                />

                <InfoRow
                    label="Study from home"
                    value={data.studyFromHome ? 'Yes' : 'No'}
                />
            </div>
        </Col>

        <Col md={5}>
            <p className="label">Technical Skills and Courses</p>
            <p className="courses-information">
                {data.technicalSkills}
            </p>
        </Col>
    </Row>
);

export default StudentBody;