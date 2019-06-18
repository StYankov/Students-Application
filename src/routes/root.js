import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { fetchStudents } from '../state/actions/studentsActions';
import CreateStudent from '../components/createStudent/createStudent-container';
import StudentsList from '../components/studentsList/StudentsList-Container';
import UpdateStudent from '../components/updateStudent/UpdateStudetn-Container';
import NotFoundPage from '../components/404/404';

class Root extends React.Component {
    componentDidMount() {
        this.props.fetchStudents();
    }

    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path="/" component={StudentsList} />
                    <Route exact path="/create" component={CreateStudent} />
                    <Route exact path="/edit/:id" component={UpdateStudent} />
                    <Route component={NotFoundPage} />
                </Switch>
            </main>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchStudents: () => dispatch(fetchStudents())
});

export default connect(
    null,
    mapDispatchToProps
)(Root);