import { 
    CREATE_STUDENT, 
    DELETE_STUDENT,
    FETCH_STUDENTS_SUCCESS,
    UPDATE_STUDENT
} from '../actions/studentsActions';

const defaultState = [];

export default function(state = defaultState, action) {
    switch(action.type) {
        case CREATE_STUDENT: {
            return [...state, action.student];
        }
        case DELETE_STUDENT: {
            return state.filter(x => x.id !== action.id);
        }
        case UPDATE_STUDENT: {
            return state.map(item => {
                if(item.id === action.id)
                    return action.student;
                
                return item;
            });
        }
        case FETCH_STUDENTS_SUCCESS: {
            // get current students ids;
            const studentIds = state.map(x => x.id);
            const newStudentsArray = [...state];

            for(const student of action.students) {
                if(studentIds.indexOf(student.id) === -1) {
                    newStudentsArray.push(student);
                }
            }

            newStudentsArray.sort(createdAtCompare);
            
            return newStudentsArray;
        }
        default: return state;
    }
}

function createdAtCompare(a,b) {
    if(a.createdAt < b.createdAt)
        return 1;
    if(a.createdAt > b.createdAt)
        return -1;
    return 0;
}