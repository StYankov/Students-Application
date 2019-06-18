import React from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Input from './Input';
import TextArea from './TextArea';
import EnglishSelect from './EnglishSelect';
import PrefWayCommunication from './PrefferedWayCommunication';
/**
 * @typedef {Object} userForm
 * @property {string} name
 * @property {string} email
 * @property {Number} age
 * @property {string} phone
 * @property {string} communicationWay
 * @property {string} englishLevel
 * @property {string} startDate
 * @property {string} technicalSkills
 * @property {string} personalPresentation
 * @property {Boolean} studyFromHome
 */


/**
 * 
 * @param {Object} formParams
 * @param {userForm} formParams.fields
 * @param {Array} formParams.errors
 */

const StudentForm = ({ fields, onChange, onSubmit, onChangeCheckbox, errors = [] }) => (
    <Form className="p-3" onSubmit={onSubmit}>
        <div className={(errors.length ? 'visible' : '') + ' errors-box'}>
            {errors.map((error, i) => <div key={`list-item-${i}`} className="alert alert-danger">{error}</div>)}
        </div>
            <Row>
                <Col md={4}>
                    <Input
                        id="name-input"
                        label="Name"
                        name="name"
                        onChange={onChange}
                        value={fields.name}
                        required
                    />
                </Col>
                <Col md={4}>
                    <Input
                        id="email-input"
                        label="Email"
                        name="email"
                        onChange={onChange}
                        value={fields.email}
                        required
                        type="email"
                    />
                </Col>
                <Col md={4}>
                    <Input
                        id="age-input"
                        label="Age"
                        name="age"
                        onChange={onChange}
                        value={fields.age}
                        required
                        type="number"
                    />
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    <Input
                        id="phone-input"
                        label="Phone"
                        name="phone"
                        onChange={onChange}
                        value={fields.phone}
                        required
                        type="tel"
                    />
                </Col>
                <Col md={4}>
                    <EnglishSelect
                        id="english-level-input"
                        label="English Level"
                        name="englishLevel"
                        value={fields.englishLevel}
                        onChange={onChange}
                    />
                </Col>
                <Col md={4}>
                    <Input
                        id="date-input"
                        label="Available to Start"
                        name="startDate"
                        onChange={onChange}
                        value={fields.startDate}
                        type="date"
                        required
                    />
                </Col>
            </Row>
        
            <Row>
                <Col md={6}>
                    <PrefWayCommunication
                        onChange={onChange}
                        name="communicationWay"
                        value={fields.communicationWay}
                    />
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <label>Study From Home</label>
                        <div className="custom-control custom-checkbox">
                            <input 
                                type="checkbox" 
                                className="custom-control-input" 
                                name="studyFromHome" 
                                id="study-from-home"  
                                onChange={() => null} // To disable error
                                onClick={onChangeCheckbox} 
                                checked={fields.studyFromHome}
                            />
                            <label className="custom-control-label" htmlFor="study-from-home">Yes</label>
                        </div>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <TextArea
                    id="technical-skills-input"
                    label="Technical Skills"
                    name="technicalSkills"
                    onChange={onChange}
                    value={fields.technicalSkills}
                />
            </Row>

            <Row>
                <TextArea
                    id="personal-presentation"
                    label="Personal Presentation"
                    name="personalPresentation"
                    onChange={onChange}
                    value={fields.personalPresentation}
                    rows={3}
                />
            </Row>

            <Row>
                <Button type="submit" variant="none" className="btn form-submit">
                    Submit
                </Button>
            </Row>
    </Form>
);

export default StudentForm;