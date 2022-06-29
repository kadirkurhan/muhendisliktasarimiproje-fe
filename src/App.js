import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Hosts from "./pages/Hosts";
import HostDetail from "./pages/HostDetail";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <div id="content">
          <Routes>
            <Route path="/hosts" exact element={<Hosts />} />
            <Route path="/host/:hostid" element={<HostDetail />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Hosts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}
