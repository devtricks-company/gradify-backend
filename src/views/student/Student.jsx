import React, { useContext, useEffect, useState } from "react";
import cardLogo from "../../assests/images/user-with-laptop.png";
import final from "../../assests/images/final.jpg";
import StudentContext from "../../context/student/studentContext";
import { Report } from "powerbi-report-component";
import { models } from "powerbi-client";
import axios from 'axios';

const Student = ({ match }) => {
  const studentContext = useContext(StudentContext);
  const { getAStudent, student } = studentContext;
  const id = match.params.id;
  const [getToken,setToken] = useState(null);

  useEffect(() => {
    getAStudent(id);
    async function powerBiData(){
      const configHeader = {
        headers:{
          "Content-Type":"application/json"
        }
      }
        const adToken = await axios.post('http://localhost:4000/adauth/oauth2',configHeader);
        const embedeToken = await axios.post('https://api.powerbi.com/v1.0/myorg/GenerateToken',{
          datasets: [
            {
              id: "1d715354-e742-4650-a3c8-05cd25e8d201"
            }
          ],
          reports: [
            {
              allowEdit: true,
              id: "d24c855f-e400-4ae5-ae36-78dc6417b39e"
            }
          ]
        },{
          headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${adToken.data.token}`
          }
        });
        console.log(embedeToken.data.token)

        setToken(embedeToken.data.token);
    }
    powerBiData();
   
  }, []);
  return (
    <div>
      <div className="student-card">
        <div className="student-image">
          <img src={cardLogo} alt="student" />
          <div className="student-content">
            <img src={final} className="profile-picture" alt="profile" />
            <div className="student-content-info">
              <div>
                <h2>{student && student.FirstName + " " + student.LastName}</h2>
                <p>University of Houston - Downtown </p>
              </div>
              <div style={{ position: "relative", top: "-50px" }}>
                <h2>Phone</h2>
                <p>{student && student.Phone}</p>
                <h2 style={{ paddingTop: "30px" }}>Email</h2>
                <p>{student && student.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {getToken &&
      <div className="report-container">
      <Report
        tokenType="Embed" // or, "Aad"
        accessToken={getToken} // accessToken goes here
        embedUrl="https://app.powerbi.com/reportEmbed?reportId=d24c855f-e400-4ae5-ae36-78dc6417b39e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZX19" // embedUrl goes here
        embedId="d24c855f-e400-4ae5-ae36-78dc6417b39e" // report or dashboard Id goes here
        extraSettings={{
          filterPaneEnabled:false,
          navContentPaneEnabled:false
        }}
        reportMode="view" // options: view/edit/create
        permissions="All" // View  // 
        style={{height:"800px",width:"50%"}}
        onLoad = {(report) => {
          const filter = {
            "$schema": "http://powerbi.com/product/schema#basic",
            "target": {
              "table": "Students",
              "column": "StudentID"
            },
            "filterType": 1,
            "operator": "In",
            "values": [
             Number(id)
            ],
            "requireSingleSelection": false
          }

          report.getPages()
    .then(function (pages) {
        // Retrieve active page.
        var activePage = pages.filter(function (page) {
            return page.isActive
        })[0];
 
        activePage.setFilters([filter])
            .then(function () {
                console.logText("Page filter was set.");
            })
            .catch(function (errors) {
                console.log(errors);
            });
    })
    .catch(function (errors) {
        console.log(errors);
    });
    

        }}
  
       
        
      />
      <Report
        tokenType="Embed" // or, "Aad"
        accessToken={getToken} // accessToken goes here
        embedUrl="https://app.powerbi.com/reportEmbed?reportId=d24c855f-e400-4ae5-ae36-78dc6417b39e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZX19" // embedUrl goes here
        embedId="d24c855f-e400-4ae5-ae36-78dc6417b39e" // report or dashboard Id goes here
        extraSettings={{
          filterPaneEnabled:false,
          navContentPaneEnabled:false
        }}
        pageName="ReportSection5de782c30e7d66c227c2"
        reportMode="view" // options: view/edit/create
        permissions="All" // View  // 
        style={{height:"800px",width:"50%"}}
        onLoad = {(report) => {
          const filter = {
            "$schema": "http://powerbi.com/product/schema#basic",
            "target": {
              "table": "Students",
              "column": "StudentID"
            },
            "filterType": 1,
            "operator": "In",
            "values": [
             Number(id)
            ],
            "requireSingleSelection": false
          }

          report.getPages()
    .then(function (pages) {
        // Retrieve active page.
        var activePage = pages.filter(function (page) {
            return page.isActive
        })[0];
 
        activePage.setFilters([filter])
            .then(function () {
                console.logText("Page filter was set.");
            })
            .catch(function (errors) {
                console.log(errors);
            });
    })
    .catch(function (errors) {
        console.log(errors);
    });
    

        }}
  
       
        
      />
      <Report
        tokenType="Embed" // or, "Aad"
        accessToken={getToken} // accessToken goes here
        embedUrl="https://app.powerbi.com/reportEmbed?reportId=d24c855f-e400-4ae5-ae36-78dc6417b39e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZX19" // embedUrl goes here
        embedId="d24c855f-e400-4ae5-ae36-78dc6417b39e" // report or dashboard Id goes here
        extraSettings={{
          filterPaneEnabled:false,
          navContentPaneEnabled:false
        }}
        pageName="ReportSectiond9c515287622b8778cd5"
        reportMode="view" // options: view/edit/create
        permissions="All" // View  // 
        style={{height:"800px",marginTop:"-25rem",width:"50%",padding:"1rem 0"}}
        onLoad = {(report) => {
          const filter = {
            "$schema": "http://powerbi.com/product/schema#basic",
            "target": {
              "table": "Students",
              "column": "StudentID"
            },
            "filterType": 1,
            "operator": "In",
            "values": [
             Number(id)
            ],
            "requireSingleSelection": false
          }

          report.getPages()
    .then(function (pages) {
        // Retrieve active page.
        var activePage = pages.filter(function (page) {
            return page.isActive
        })[0];
 
        activePage.setFilters([filter])
            .then(function () {
                console.logText("Page filter was set.");
            })
            .catch(function (errors) {
                console.log(errors);
            });
    })
    .catch(function (errors) {
        console.log(errors);
    });
    

        }}
  
       
        
      />
      </div>
  }
    </div>
      
  );
};



export default Student;
