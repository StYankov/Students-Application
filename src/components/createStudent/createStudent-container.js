import React from 'react';
import { connect } from 'react-redux';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { generate } from 'randomstring';
import { loremIpsum as lorem } from 'lorem-ipsum';
import moment from 'moment';
import LoadingOverlay from 'react-loading-overlay';
import Form from '../common/StudentForm';

import { createStudent } from '../../state/actions/studentsActions';
import Button from 'react-bootstrap/Button';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomEngLevel() {
    const levels = [ 'A1', 'A2', 'B1', 'B2', 'C1' ];
    const num = getRandomInt(0,4);

    return levels[num];
}

function randomDate(start = new Date(2012, 0, 1), end = new Date()) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

class CreateStudent extends React.Component {
    state = {
        fields: {
            name: '',
            email: '',
            age: '',
            phone: '',
            communicationWay: '',
            englishLevel: '',
            startDate: '',
            technicalSkills: '',
            personalPresentation: '',
            studyFromHome: false
        },
        errors: [],
        isLoading: false
    }

    onChange = (e) => {
        const fields = this.state.fields;
        fields[e.target.name] = e.target.value;

        this.setState({ fields });
    }

    onChangeCheckbox = (e) => {
        const fields = this.state.fields;
        fields[e.target.name] = ! fields[e.target.name];

        this.setState({ fields });
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(isNaN(this.state.fields.age)) {
            this.setState({ errors: ['Age is not a number'] });
            return;
        }

        this.setState({ isLoading: true });

        this.props.createStudent(this.state.fields)
        .then(result => {
            if(result.success) {
                this.setState({ isLoading: false, errors: [] });
                ToastsStore.success('Student was added!');
                this.clearForm();
            } else {
                this.setState({ isLoading: false, errors: result.errors });
            }
        });
    }

    clearForm = () => {
        const fields = this.state.fields;
        const clearedFields = {};
        for(const key of Object.keys(fields)) {
            clearedFields[key] = '';
        }

        this.setState({ fields: clearedFields });
    }

    generateStudentData = () => {
        const fields = {
            name: generate(10),
            email: generate(5) + '@gmail.com',
            age: getRandomInt(16,40),
            phone: generate({ charset: 'numeric', length: 9 }),
            communicationWay: getRandomInt(0,1) === 1 ? 'Phone' : 'Email',
            englishLevel: randomEngLevel(),
            startDate: moment(randomDate()).format('YYYY-MM-DD'),
            technicalSkills: lorem() + lorem() + lorem(),
            personalPresentation: lorem() + lorem(),
            studyFromHome: getRandomInt(0,1) === 1 ? true : false
        };

        this.setState({ fields });
    }

    render() {
        return (
            <section className="form-container">
                <h2 className="text-center section-heading">Create Student</h2>  
                <Form 
                    fields={this.state.fields} 
                    onChange={this.onChange} 
                    onSubmit={this.onSubmit}
                    errors={this.state.errors}
                    onChangeCheckbox={this.onChangeCheckbox}
                />
                <LoadingOverlay
                    active={this.state.isLoading}
                    spinner
                    text='Loading...'
                />
                <ToastsContainer store={ToastsStore} />

                <div className="generate-button-container">
                    <Button onClick={this.generateStudentData} variant="dark">Auto Generate</Button>
                </div>
            </section>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    createStudent: data => dispatch(createStudent(data))
});

export default 
connect(
    null,
    mapDispatchToProps
)(CreateStudent);