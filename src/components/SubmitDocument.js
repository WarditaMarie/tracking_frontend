import logo from "./img/logo.png";
import "./css/SubmitDocument.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { appConfig } from "../config/appConfig";
import PropTypes from "prop-types";
//import uuid from 'uuid/v4';


const SubmitDocument = (props) => {
  const navigate = useNavigate();

  const [formData, setformData] = useState({
  // id:uuid(),
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

  const submitDocument = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        `${appConfig.API_URL1}/api/UploadDocument`,
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

        navigate('/UploadDocument')
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="Submit">
      <header>
        <img src={logo} className="Submit-logo" alt="logo" />
        <form onSubmit={submitDocument}>
          <div align="center">
            <table>
              <tbody>
                <tr className="Submit-label">
                  <td>
                    <label htmlFor="">Name:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="name"
                      onChange={handleInput}
                      value={formData.name}
                      className="Submit-placeholder"
                      placeholder="Enter Name"
                    />
                  </td>
                </tr>
                <tr className="Submit-label">
                  <td>
                    <label htmlFor="">Date of Birth:</label>
                  </td>
                  <td>
                    <input
                      type="date"
                      name="birthdate"
                      onChange={handleInput}
                      value={formData.birthdate}
                      className="Submit-placeholder"
                      placeholder="Date of Birth"
                    />
                  </td>
                </tr>
                <tr className="Submit-label">
                  <td>
                    <label htmlFor="">Address:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="address"
                      onChange={handleInput}
                      value={formData.address}
                      className="Submit-placeholder"
                      placeholder="Enter Address"
                    />
                  </td>
                </tr>
                <tr className="Submit-label">
                  <td>
                    <label htmlFor="">Contact Number:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="contactnumber"
                      onChange={handleInput}
                      value={formData.contactnumber}
                      className="Submit-placeholder"
                      placeholder="ex. 09178435264"
                    />
                  </td>
                </tr>
                <tr className="Submit-label">
                  <td>
                    <label htmlFor="docu_type">Type of Document:</label>
                  </td>
                  <td>
                    <input
                      type="hidden"
                      name="docu_type"
                      onChange={handleInput}
                      value={formData.docu_type}
                      className="Submit-placeholder"
                      placeholder="Select Document"
                    />
                    <select
                      name="docu_type"
                      onChange={handleInput}
                      value={formData.docu_type}
                      className="Submit-placeholder"
                    >
                      <option value="Select">Select Document</option>
                      <option value="BirthCertificate">
                        Birth Certificate
                      </option>
                      <option value="MarriageCertificate">
                        Marriage Certificate
                      </option>
                      <option value="NBIClearance">NBI Clearance</option>
                      <option value="PoliceClearance">Police Clearance</option>
                      <option value="Death Certificate">
                        Death Certificate
                      </option>
                      <option value="Passport">Passport</option>
                      <option value="DriversLicense">Driver's License</option>
                      <option value="DSWDClearance">DSWD Clearance</option>
                      <option value="BIR">BIR</option>
                      <option value="BusinessPermit">Business Permit</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <button className="Submit-button" onClick={submitDocument}>
              Next
            </button>
          </div>
        </form>
        <div>
          {" "}
          <button className="Submit-button">
            <Link to={{ pathname: "/Main" }} className="Submit-link">
              Previous
            </Link>
          </button>
        </div>
      </header>
    </div>
  );
};

SubmitDocument.propTypes = {};

export default SubmitDocument;