import {GET_ALL_STUDENTS,GET_A_STUDENT} from '../types';

export default (state,action) => {
    switch(action.type){
        case GET_ALL_STUDENTS:
            return{
                ...state,
                students:action.payload
            }

        case GET_A_STUDENT:
            return{
                ...state,
                student:action.payload
            }  

    }
}