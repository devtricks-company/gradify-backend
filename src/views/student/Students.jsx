import { Paper } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import StudentContext from "../../context/student/studentContext";
import { AiOutlineHome } from "react-icons/ai";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Checkbox,
  TablePagination
} from "@material-ui/core";
import TableStudent from "./TableStudent";
import EnhancedTable from "./TableStudent";

const Students = () => {
  const studentContext = useContext(StudentContext);
  const { students, getAllStudents } = studentContext;
  
  useEffect(() => {
   
       getAllStudents();
   
  }, []);

  return (
    <>
    
      <div className="header-student">
        <h2>Students </h2>
        <h4>University Of Houston - DownTown</h4>
      </div>
      <div className="sutdent-content">
         {students ? <EnhancedTable rows={students} />: <h1>Loading...</h1>} 
      </div>
    </>
  );
};

export default Students;
