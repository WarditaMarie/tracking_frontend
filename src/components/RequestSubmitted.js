import logo from './img/logo.png';
import './css/RequestSubmitted.css';
import { Link } from 'react-router-dom';
import QrCode from 'react-qr-code';
import React, { useState, useEffect } from "react";
import BarCode from 'react-barcode';
import { v4 } from 'uuid';

function RequestSubmitted({text}) {
    
    const unique_id = v4();
    const small_id = unique_id.slice(0,8)

   // const [temp, setTemp] = useState("");
    const [word, setWord] = useState("");
    const [size, setSize] = useState(300);
    const [bgColor, setBgColor] = useState("ffffff");
    const [qrCode, setQrCode] = useState("");
  
    useEffect(() => {
        setQrCode
     (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
      }, [word, size, bgColor]);
      
      // Updating the input word when user
      // click on the generate button

  return (
    <div className="RequestSubmitted">
        <header>
            <img src={logo} className="RequestSubmitted-logo" alt="logo" />
    <br></br><br></br>
   
            <div>
            <img className="QrCode" src ={qrCode} alt="" />
            </div>
            <div>
            <BarCode className= "BarCode" value ="http://github.com/kciter" displayValue="false"/> 
            </div>
        <div>
            <h2>TRCK-{small_id}</h2>
        </div>

            <div>
                <h4 className="RequestSubmitted-note"> Please save your Tracking ID, QR Code and Barcode to track your transaction.</h4>
            </div>
            
            <br></br><button onClick={() => window.print()} className="RequestSubmitted-button" >Print</button>
            <br></br><button className="RequestSubmitted-button"><Link  to={{pathname: '/Main'}} className="RequestSubmitted-link">Done</Link></button>
        </header>
    </div>
);
}
export default RequestSubmitted;