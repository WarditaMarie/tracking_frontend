import logo from './img/logo.png';
import help from './img/help.png';
import './css/Main.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="Main">
        <header>
            <img src={logo} className="Main-logo" alt="logo" />
        
            <div>
                <input type="text" className="Main-trackid" autocomplete="off" required placeholder="Please enter your tracking ID"/>
                <button className="Main-search"><Link  to={{pathname: '/TrackPage'}} className="Main-link">Search</Link></button>
            </div>

                <button className="Main-button"><Link  to={{pathname: '/SubmitDocument'}} className="Main-link">Submit Document</Link></button>
                <br></br><button className="Main-button"><Link  to={{pathname: '/RequestDocument'}} className="Main-link">Request a Document</Link></button>
                
            <div>
                <Link to={{pathname: '/Help'}}><img src= {help} className="Main-helpicon" alt="help"/></Link>
            </div>
        </header>   
    </div>
  );
}

export default Main;