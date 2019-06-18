import React from 'react';
import { connect } from 'react-redux';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import LoadingOverlay from 'react-loading-overlay';
import Form from '../common/StudentForm';

import { updateStudent } from '../../state/actions/studentsActions';

class UpdateStudent extends React.Component {
    state = {
        fields: {},
        errors: [],
        hasLoaded: false,
        isLoading: false
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps);

        if(nextProps.student) {
            return {
                fields: nextProps.student,
                hasLoaded: true
            }
            
        }

        return null;
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    onChangeCheckbox = (e) => {
        const fields = this.state.fields;
        fields[e.target.name] = ! fields[e.target.name];

        this.setState({ fields });
    }

    onChange = e => {
        const fields = this.state.fields;
        fields[e.target.name] = e.target.value;

        this.setState({ fields });
    }

    onSubmit = e => {
        e.preventDefault();

        this.setState({ isLoading: true });

        const id = this.state.fields.id;

        if(!id) {
            alert('Wrong ID. Please reload the window!');
            return;
        }

        this.props.updateStudent(this.state.fields, id)
        .then(result => {
            if(result.success) {
                this.setState({ isLoading: false, errors: [] });
                ToastsStore.success('The student was updated!');
            } else {
                this.setState({ errors: result.errors });
            }
        });
    }

    _renderForm = () => (
        <Form 
            fields={this.state.fields} 
            onChange={this.onChange} 
            onSubmit={this.onSubmit}
            errors={this.state.errors}
            onChangeCheckbox={this.onChangeCheckbox} 
        />
    )

    render() {
        return (
            <section className="form-container">
                <h2 className="text-center section-heading">Edit Student</h2>  
                {this.state.hasLoaded ? this._renderForm() : null}
                <LoadingOverlay
                    active={this.state.isLoading || !this.state.hasLoaded}
                    spinner
                    text='Loading...'
                />
                <ToastsContainer store={ToastsStore} />
            </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const student = state.students.find(student => student.id === id); 
    return {
        student: student || null
    }
}

const mapDispatchToProps = dispatch => ({
    updateStudent: (data, id) => dispatch(updateStudent(data, id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateStudent);