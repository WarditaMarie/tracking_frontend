import logo from './img/logo.png';
import './css/Submitted.css';
import { Link } from 'react-router-dom';
import QrCode from 'react-qr-code';
import {useState, useEffect} from 'react';
import BarCode from 'react-barcode';
import {v4} from 'uuid';


function Submitted() {
    const unique_id = v4();
    const small_id = unique_id.slice(0,8)

   // const [temp, setTemp] = useState("");
    const [word, setWord] = useState("");
    const [size, setSize] = useState(400);
    const [bgColor, setBgColor] = useState("ffffff");
    const [qrCode, setQrCode] = useState("");
  
    useEffect(() => {
        setQrCode
     (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
      }, [word, size, bgColor]);
      
      // Updating the input word when user
      // click on the generate button
     
   return (
     <div className="Submitted">
         <header>
             <img src={logo} className="Submitted-logo" alt="logo" />
 <br></br>

        <div>
            <img className="QrCodeSub" src ={qrCode} alt="" />
            </div>
            <div>
            <BarCode className= "BarCodeSub" value ="http://github.com/kciter" displayValue="false"/> 
            </div>
         
            <div>
                <h2>SUBTR-{small_id}</h2>
            </div>
            <div>
                <h4 className="Submitted-note"> Please save your Tracking ID, QR Code and Barcode to track your transaction.</h4>
            </div>
            
            <br></br><button onClick={() => window.print()} className="Submitted-button" >Print</button>
            <br></br><button className="Submitted-button"><Link  to={{pathname: '/Main'}} className="Submitted-link">Done</Link></button>
        </header>
    </div>
);
}
export default Submitted;
