import logo from './img/logo.png';
import './css/Home.css';
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    navigate('/Main');
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
            <button className="Home-getstarted" onClick={navigate}>Get Started</button>
      </header>
    </div>
  );
}

export default Home;