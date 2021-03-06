import React,{useReducer} from 'react';
import StudentContext from './studentContext';
import studentReducer from './studentReducer';
import axios from 'axios';
import {GET_ALL_STUDENTS,GET_A_STUDENT,SEARCH_STUDENT} from '../types';

const StudentState = (props) => {
    const initalState = {
        students:null,
        student:null,
        searchStudents:null
    }

    const [state,dispatch] = useReducer(studentReducer,initalState);

    const getAllStudents = async () => {
        try {
            const students = await axios.get('http://localhost:4000/student');
          
            dispatch({
                  type:GET_ALL_STUDENTS,
                  payload:students.data  
            })    
        } catch (error) {
            
        }
        

    }

    const getAStudent = async (id) => {
        
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }

       const student  = await axios.get(`http://localhost:4000/student/${id}`,config);
        dispatch({
            type:GET_A_STUDENT,
            payload:student.data
        });

    }

    const searchStudent = async (text) => {
        dispatch({
            type:SEARCH_STUDENT,
            payload:text
        })
    }

    return(
        <StudentContext.Provider value={{
            students:state.students,
            searchStudents:state.searchStudents,
            student:state.student,
            getAllStudents,
            getAStudent,
            searchStudent
        }}> 
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentState;
