import logo from './img/logo.png';
import './css/UploadDocument.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { appConfig } from "../config/appConfig";

import PropTypes from "prop-types";

const UploadDocument = (props) => {
    const navigate = useNavigate();
    const [formData, setformData] = useState({
      primaryID: "",
      secondaryID: "",
    });
    const [selectedFile, setSelectedFile] = useState({
      file: "",
      validID1: "",
      validID2: "",
    });

  
    const handleInput = (e) => {
      
      setformData({
          ...formData,
          [e.target.name]: e.target.value,
          
        });
        setSelectedFile(e.target.files[0]);
      };
      
      const uploadDocument = async (e) => {
 
        e.preventDefault()
        try {
          const res = await axios.post(
            `${appConfig.API_URL1}/api/Submitted`,
            formData,selectedFile
          );
         
          if (res.data.status === 200) {
            console.log(res.data.message);
            setformData({
              primaryID: "",
              secondaryID: "",
            });
            setSelectedFile({
              file: "",
              validID1: "",
              validID2: "",
            });
            
            navigate('/Submitted')
          }
        } catch (error) {
          console.log("Error:", error);
        }
      };
    
    
        
  return (
    <div className="Upload">
        <header>
            <img src={logo} className="Upload-logo" alt="logo" />
            <form onSubmit={uploadDocument}>
            <div align="center">
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="" className="Upload-label">Upload File Document:</label>
                            <input type="file" className="Upload-file" name="file" onChange={handleInput}  value={formData.file}  /></td>
                        </tr>   
                        <tr>
                            <td><label htmlFor="" className="Upload-label" >Primary ID:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="hidden" name="primaryID" onChange={handleInput} value={formData.primaryID} className="Upload-placeholder" placeholder="Valid ID"/>
                                    <select name="primaryID"  onChange={handleInput} value={formData.primaryID} className ="Upload-placeholder">  
                                        <option value="Select">Select Type of ID</option>
                                        <option value="StudentID">Student ID</option>  
                                        <option value="EmployeesID">Employee's ID / Office Id.</option>  
                                        <option value="UMID">UMID</option>  
                                        <option value="PRCID">Professional Regulation Commission (PRC) ID </option>  
                                        <option value="SeniorID">Senior Citizen ID</option>  
                                        <option value="SSSID">SSS ID</option>  
                                        <option value="VoterID">Voter's ID</option>  
                                        <option value="LicenseID">License ID</option>
                                        <option value="PhilHealthID">PhilHealth ID</option>
                                        <option value="GovernmentID">GovernmentID</option>    
                                    </select> 
                                <input type="file" className="Upload-file" onChange={handleInput}  value={formData.validID1}  name="validID1"/>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="" className="Upload-label" >Secondary ID:</label>&nbsp;
                                <input type="hidden" name="secondaryID" onChange={handleInput} value={formData.secondaryID} className="Upload-placeholder" placeholder="Valid ID" />
                                    <select name="secondaryID" onChange={handleInput} value={formData.secondaryID} className ="Upload-placeholder">  
                                        <option value="Select">Select Type of ID</option> 
                                        <option value="TINID">TIN ID</option>  
                                        <option value="PostalID">Postal ID</option>  
                                        <option value="GSISCard">GSIS Card</option>  
                                        <option value="BarangayCertificate">Barangay Certification </option>  
                                        <option value="SeamansBook">Seaman's Book</option>  
                                        <option value="HSForm137">Highschool Form 137</option>  
                                        <option value="PSAMarriage">PSA Marriage Contract</option>   
                                        <option value="PSABirthCertificate">PSA Birth Certificate</option>  
                                    </select>   
                                <input type="file" className="Upload-file" onChange={handleInput} value={formData.validID2}  name="validID2"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br></br>
            <br></br><button className="Upload-button" onClick={uploadDocument}>Submit Files</button>
            </form>
            <div align ="center">
            {" "}
            <button className="Upload-button"><Link  to={{pathname: '#'}} className="Submit-link">Skip for now</Link></button>
            <br></br><button className="Upload-button"><Link  to={{pathname: '/SubmitDocument'}} className="Submit-link">Previous</Link></button>
            </div>  
        </header>
    </div>
    );
};
UploadDocument.propTypes = {};

export default UploadDocument;