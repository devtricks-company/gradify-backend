import React,{useState,useEffect} from 'react'
import {TableRow,TableCell,Checkbox,IconButton} from '@material-ui/core';
import {IoAddCircleSharp} from 'react-icons/io5';
import AddXp from './AddXp';

const TableShowStudent = ({student,selectAll,removeStudentSelected,addStudentSelected}) => {

    const [check,setCheck] = useState(selectAll); 
    const [showXpModal,setShowXpModal] = useState(false);

    useEffect(() => {
      setCheck(selectAll);
    }, [selectAll])   

    const onChangeCheckHandler = () => {
        setCheck(!check);
        if(!check){
            addStudentSelected(student.StudentID);
        }else{
            removeStudentSelected(student.StudentID);
        }
    }

    const showXpModalHandler = () => {
        setShowXpModal(true)
    }
    const closeXpModalHandler = () => {
        setShowXpModal(false)
    }
    return (
        <TableRow>
            <TableCell>
            <Checkbox
                    checked={check}
                    onChange={onChangeCheckHandler}
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
            </TableCell>
            <TableCell>
                    {student.FirstName + " " + student.LastName}  
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell style={{position:"relative"}}>
                <IconButton onClick={showXpModalHandler}>
                    <IoAddCircleSharp color="#4ac1b8"/>
                </IconButton>
                {showXpModal && <AddXp studentID={student.StudentID} close={closeXpModalHandler}  />}
                
            </TableCell>
        </TableRow>
    )
}

export default TableShowStudent
