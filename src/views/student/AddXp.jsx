import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { IoAddCircleSharp } from "react-icons/io5";
import { IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { columnsSelector } from "@material-ui/data-grid";

const AddXp = ({ studentsID, studentID, close }) => {
  const [xpValue, setXpValue] = useState("");
  const [showAlert,setShowAlert] = useState(false);
  const [error,setError] = useState(null);
  const addXpClickHandler = async () => {
    if (studentsID) {
      try {
          if(xpValue === "" ){
              setError({error:"xp field can not be empty"});
              return;
          }
          if(studentsID.length < 1){
            
              setShowAlert(true);
             
              setTimeout(() => {
                    setShowAlert(false);
                    close();
              },3000)
              return  
          }
        const body = {
          xpValue,
          studentXp: studentsID,
        };

        const res = await axios.post(
          "http://localhost:4000/student/addxpToSelectedStudent",
          body,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        close();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        if(xpValue === "" ){
            setError({error:"xp field can not be empty"});
            return;
        }
        const body = {
          xpValue,
          studentID,
        };

        const res = await axios.post(
          "http://localhost:4000/student/addxp",
          body,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        close();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const changeXpValueHandler = (e) => {
    setXpValue(e.target.value);
  };
  return (
    <>
      <div className="xp-container" onClick={close}></div>
      <div className="add-xp-panel">
        <h2>ADD XP</h2>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Description"
          className="description_input"
        />
        <input
          type="text"
          name="xpValue"
          placeholder="Add Xp"
          value={xpValue}
          onChange={changeXpValueHandler}
        />

        <IconButton
          onClick={addXpClickHandler}
          style={{ position: "relative", top: "8px" }}
        >
          <IoAddCircleSharp color="#f2b241" size={35} />
        </IconButton>
        {error &&   <div>
            <p style={{color:"orange",paddingTop:"10px",paddingLeft:"10px"}}>{error.error}</p>
        </div>}
       
      </div>
      {showAlert &&  <Alert variant="filled" severity="error" style={{position:"absolute",bottom:"0",right:0,width:"350px" }}>
       Please Select One Student At Least  
      </Alert> }
      
    </>
  );
};
AddXp.propTypes = {
  studentsID: PropTypes.array.isRequired,
};
export default AddXp;
