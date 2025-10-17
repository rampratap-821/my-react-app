import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Product from "./Page/Product";
import About from "./Page/About";
import Team from "./Page/Team";
import Contact from "./Page/Contact";
import Course_Details from "./Page/Course_Details";
import Navbar from "./Component/Navbar";
import Dashboard from "./Page/Dashboard";
import Profile from "./Page/Profile";
import IndianGvm from "./Home/IndianGvm";

const App = () => {
  const money = 1000;
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<IndianGvm money={money}/>} />
        <Route path="/courses" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses/:id" element={<Course_Details />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/profile" element={<Profile/>} />
        
      </Routes>
    </Router>
  );
};



export default App;

