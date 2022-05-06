import logo from './img/logo.png';
import './css/TrackPage.css';
import { Link } from 'react-router-dom';

function TrackPage() {

  return (
    <div className="Track">
        <header>
            <img src={logo} className="Track-logo" alt="logo" />

           
            <div className="Track-margin">
                <button className="Track-button"><Link  to={{pathname: '/Main'}} className="Track-link">Another Transaction</Link></button>
                <button className="Track-button"><Link  to={{pathname: '/'}} className="Track-link">Exit</Link></button>
            </div>
        </header>
    </div>
);
}
export default TrackPage;