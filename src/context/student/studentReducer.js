import {GET_ALL_STUDENTS,GET_A_STUDENT,SEARCH_STUDENT} from '../types';

export default (state,action) => {
    switch(action.type){
        case GET_ALL_STUDENTS:
            return{
                ...state,
                students:action.payload,
                searchStudents:action.payload
            }

        case GET_A_STUDENT:
            return{
                ...state,
                student:action.payload
            }  

        case SEARCH_STUDENT:
   
            return{
                ...state,
                searchStudents: state.students
                .filter(student => student.FirstName.indexOf(action.payload) >= 0 )
            }    

    }
}