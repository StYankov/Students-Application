import Student from '../../models/Student';

export const CREATE_STUDENT = 'CREATE_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT;'
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';

export function createStudent(data) {
    return async dispatch => {
        const validationErrors = Student.validate(data);

        if(validationErrors.length) {
            return {
                success: false,
                errors: validationErrors
            }
        }

        const student = await Student.create(data);

        if(student.success)
            dispatch(createStudentSuccess(student));   

        return student;

    }
}

export function deleteStudent(id) {
    return async dispatch => {
        const result = await Student.delete(id);
        
        if(result) {
            dispatch(deleteStudentSuccess(id));
        }

        return true;
    }
}

export function fetchStudents(page) {
    return async (dispatch, getState) => {
        
        const result = await Student.fetch(page, getState().students.slice(-1)[0]);

        if(result.success) {
            dispatch(fetchStudentsSucess(result.data));
        }

        return result;
    }
}

export function updateStudent(data, id) {
    return async dispatch => {
        const result = await Student.update(data, id);

        if(result.success)
            dispatch(updateStudentSuccess(result.student, id));
        
        return result;
    }
}

function createStudentSuccess(student) {
    return {
        type: CREATE_STUDENT,
        student
    }
}

function deleteStudentSuccess(id) {
    return {
        type: DELETE_STUDENT,
        id
    }
}

function fetchStudentsSucess(students) {
    return {
        type: FETCH_STUDENTS_SUCCESS,
        students
    }
}
    
function updateStudentSuccess(student, id) {
    return {
        type: UPDATE_STUDENT,
        student,
        id
    }
}