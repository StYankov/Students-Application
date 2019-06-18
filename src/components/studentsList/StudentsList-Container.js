import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { deleteStudent, fetchStudents } from '../../state/actions/studentsActions';
import StudentListItem from './Student';

class StudentsList extends React.Component {
    state = {
        page: 1
    }

    onDeletePress = id => {
        if(window.confirm('Are you sure you want to delete this student?')) {
            this.props.deleteStudent(id);
        }
    }

    onEdit = id => {
        this.props.history.push('/edit/' + id);
    }

    onLoadMore = () => {
        const page = this.state.page + 1;
        this.setState({ page });
        this.props.fetchStudents(page);
    }

    _renderStudentsList = () => this.props.students.map(student =>
        <StudentListItem 
                key={`list-item-${student.id}`} 
                data={student}
                onDelete={this.onDeletePress}
                onEdit={this.onEdit} 
                />);

    _renderLoadModeButton = () => (
        <div className="text-center">
            <Button onClick={this.onLoadMore} variant="info">Load More</Button>
        </div>
    )

    _renderNoStudents = () => (
        <p className="text-center">No Students</p>
    );

    render() {
        const { students } = this.props;
        return(
            <section className="form-container">
                <h2 className="text-center section-heading">Students</h2>  
                {students && students.length ? this._renderStudentsList() : this._renderNoStudents()}
                {students && students.length ? this._renderLoadModeButton() : null}
            </section>
        );
    }
}

const mapStateToProps = state => ({
    students: state.students
});

const mapDispatchToProps = dispatch => ({
    deleteStudent: id => dispatch(deleteStudent(id)),
    fetchStudents: page => dispatch(fetchStudents(page))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentsList);