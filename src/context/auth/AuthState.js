
import React,{useReducer} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import {LOGIN_ADMIN} from '../types';
import jwtDecode from 'jwt-decode';

const AuthState = (props) =>{
    const initialState = {
        user:null
    }


    const [state,dispatch] = useReducer(authReducer,initialState);

    if(localStorage.getItem('adminToken')){
        const decodeToken = jwtDecode(localStorage.getItem('adminToken'));
        if(decodeToken.exp * 1000 < Date.now()){
            localStorage.removeItem('adminToken');
        }else{
            initialState.user = decodeToken;
        }
    }


    const login = async (userData) =>{
        
        try {
            const config = {
                headers:{
                    'Content-Type':'application/json'
                }
            }
            const adminUser = await axios.post('http://localhost:4000/admin/login',userData,config);
            console.log(adminUser)
            dispatch({

                type:LOGIN_ADMIN,
                payload:adminUser.data
            })
            localStorage.setItem('adminToken',adminUser.data.token);

        } catch (error) {
            console.log(error)
        }
    }


    return(
        <AuthContext.Provider value={{
             user:state.user,
             login   
        }}>
            {props.children}
        </AuthContext.Provider>
    )


}

export default AuthState;