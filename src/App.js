import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "aos/dist/aos.css";

class App extends Component {
  state = {
    pathName: window.location.hash,
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
