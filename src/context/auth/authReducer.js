import {LOGIN_ADMIN} from '../types';

export default (state,action) =>{

    switch(action.type){
        case LOGIN_ADMIN:
            return{
                ...state,
                user:action.payload
            }
    }
}