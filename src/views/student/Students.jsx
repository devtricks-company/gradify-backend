
import { useState } from "react";
import React, { useContext, useEffect } from "react";
import StudentContext from "../../context/student/studentContext";



import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Checkbox,
  TablePagination,
  Button,
} from "@material-ui/core";
import TableShowStudent from "./TableShowStudent";
import Axios from "axios";
import AddXp from "./AddXp";
import SearchStudent from "./SearchStudent";

const Students = () => {
  const studentContext = useContext(StudentContext);
  const { searchStudents, getAllStudents } = studentContext;
  const [studentSelected, setStudentSelected] = useState([]);
  const [checkStudentSelectAll, setCheckStudentSelectAll] = useState(false);
  const [showXpPanel,setShowXpPanel] = useState(false);
  
  

  useEffect(() => {
    getAllStudents();
  
  }, []);

  const removeFromStudentSelected = (studentID) => {
    
    const result = studentSelected.filter(
      (stu) => stu !== studentID
    );
    setStudentSelected(result);
  };

  const addStudentSelected = (studentID) => {
    const result = [...studentSelected, studentID];
    setStudentSelected(result);
  };

  const selectAllChangeHanlder = () => {
    setCheckStudentSelectAll(!checkStudentSelectAll);
    if (!checkStudentSelectAll === true) {
      const studentID = searchStudents && searchStudents.map(student => student.StudentID);
      setStudentSelected(studentID);
    } else {
      setStudentSelected([]);
    }
  };

  const closeModal = () => {
    setShowXpPanel(false);
  }
  

  return (
    <>
   
      <div className="header-student">
        <h2>Students </h2>
        <h4>University Of Houston - DownTown</h4>
      </div>
      <div className="sutdents-content">
        {searchStudents ? (
          <>
            <div className="tablebar">
              <div className="tablebar__group">
               <SearchStudent />
                <button className="tablebar_import">Import Student</button>
                <button className="tablebar_new">New Student</button>
              </div>
              <div className="tablebar__sgroup">
                <button className="tablebar_xp" onClick={() => setShowXpPanel(true)}>Award Points</button>
                {showXpPanel ?
                   <AddXp studentsID={studentSelected} close={closeModal} />
                :  null}
               
              </div>
            </div>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox
                      checked={checkStudentSelectAll}
                      onChange={selectAllChangeHanlder}
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                  </TableCell>
                  <TableCell>
                    <h5>Name</h5>
                  </TableCell>
                  <TableCell>
                    <h5>Absent</h5>
                  </TableCell>
                  <TableCell>
                    <h5>Key Factor</h5>
                  </TableCell>
                  <TableCell>
                    <h5>Student Score</h5>
                  </TableCell>

                  <TableCell>
                    <h5>Student Score</h5>
                  </TableCell>

                  <TableCell>
                    <h5>Dev Area</h5>
                  </TableCell>

                  <TableCell>
                    <h5>Collage Connect</h5>
                  </TableCell>
                  <TableCell>
                    <h5>Level</h5>
                  </TableCell>
                  <TableCell>
                    <h5>Xp</h5>
                  </TableCell>
                  <TableCell>
                    <h5>Award Points</h5>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {searchStudents.map((student) => (
                  <TableShowStudent
                    key={student.StudentID}
                    student={student}
                    selectAll={checkStudentSelectAll}
                    removeStudentSelected={removeFromStudentSelected}
                    addStudentSelected={addStudentSelected}
                  />
                ))}
              </TableBody>
            </Table>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default Students;
