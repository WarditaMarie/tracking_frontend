import logo from "./img/logo.png";
import "./css/RequestDocument.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { appConfig } from "../config/appConfig";
import props from "prop-types";
import { v4 } from 'uuid';
//import Information from './RequestSubmitted';

const RequestDocument = (props) => {
    const navigate = useNavigate();

    const unique_id = v4();
    const [formData, setformData] = useState({
      trackingid: unique_id.slice(0,8),
      name: "",
      birthdate: "",
      address: "",
      contactnumber: "",
      docu_type: "",
    });
  
    const handleInput = (e) => {
      setformData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const requestDocument = async (e) => {
      e.preventDefault()
      try {
        const res = await axios.post(
          `${appConfig.API_URL1}/api/RequestSubmitted`,
          formData
        );
  
        if (res.data.status === 200) {
          console.log(res.data.message);
          setformData({
            name: "",
            birthdate: "",
            address: "",
            contactnumber: "",
            docu_type: "",
          });
  
          navigate('/RequestSubmitted')
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };
  
    return (
    <div className="Request">
        <header>
            <img src={logo} className="Request-logo" alt="logo" />
            <form onSubmit={requestDocument}>
            <div align ="center">
            
                <table>
                    <tr className="Request-label">
                        <td><label>Name:</label></td>
                        <td><input type="text" name="name" id="name" onChange={handleInput} value={formData.name}  className="Request-placeholder"  placeholder="Enter Name" /></td>
                    </tr>   
                    <tr className="Request-label">
                        <td><label>Date of Birth:</label></td>
                        <td><input type="date" name="birthdate" onChange={handleInput} value={formData.birthdate}  className="Submit-placeholder"   placeholder="Date of Birth" /></td>
                    </tr>
                    <tr className="Request-label">   
                        <td><label>Address:</label></td>
                        <td><input type="text" name="address" onChange={handleInput} value={formData.address} className="Request-placeholder" placeholder="Enter Address" /></td>
                    </tr>
                    <tr className="Request-label">
                        <td><label>Contact Number:</label></td>
                        <td><input type="text" name="contactnumber" onChange={handleInput} value={formData.contactnumber} className="Request-placeholder"  placeholder="ex. 09178435264" /></td>
                    </tr>
                    <tr className="Request-label">
                        <td><label className="request_doc">Type of Document:</label></td>
                        <td><input type="hidden" name="docu_type" onChange={handleInput} value={formData.docu_type} className="Request-placeholder"  placeholder="Select Document" />
                            <select name="docu_type" onChange={handleInput} value={formData.docu_type} className ="Request-placeholder"  required>  
                                <option value="Select">Select Document</option> 
                                <option value="BirthCertificate">Birth Certificate</option>  
                                <option value="MarriageCertificate">Marriage Certificate</option>  
                                <option value="NBIClearance">NBI Clearance</option>  
                                <option value="PoliceClearance">Police Clearance</option>  
                                <option value="Death Certificate">Death Certificate</option>  
                                <option value="Passport">Passport</option>
                                <option value="DriversLicense">Driver's License</option>  
                                <option value="DSWDClearance">DSWD Clearance</option>  
                                <option value="BIR">BIR</option>   
                                <option value="BusinessPermit">Business Permit</option>    
                            </select>   
                        </td>
                    </tr>
                </table>
            </div>
            <div>
            <button className="Submit-button" onClick={requestDocument}>Next</button>
            </div>
            </form>
            <div>
            {" "}
                <button className="Submit-button"><Link  to={{pathname: '/Main'}} className="Request-link">Previous</Link></button>
            </div>
        </header>
    </div>
    );
};
RequestDocument.props = {};

export default RequestDocument;