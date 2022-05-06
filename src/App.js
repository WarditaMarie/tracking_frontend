import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Main from "./components/Main";
import SubmitDocument from "./components/SubmitDocument";
import RequestDocument from "./components/RequestDocument";
import UploadDocument from "./components/UploadDocument";
import Submitted from "./components/Submitted";
import RequestSubmitted from "./components/RequestSubmitted";
import TrackPage from "./components/TrackPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Main" element={<Main />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/SubmitDocument"
            element={<SubmitDocument />}
          ></Route>
          <Route
            exact
            path="/RequestDocument"
            element={<RequestDocument />}
          ></Route>
          <Route
            exact
            path="/UploadDocument"
            element={<UploadDocument />}
          ></Route>
          <Route exact path="/Submitted" element={<Submitted />}></Route>
          <Route
            exact
            path="/RequestSubmitted"
            element={<RequestSubmitted />}
          ></Route>
          <Route exact path="/TrackPage" element={<TrackPage />}></Route>
      
        </Routes>
      </Router>
    );
  }
}

export default App;