
import { useState } from 'react';
import './App.css';
import Accordian from './components/Accordian';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";


function App() {
  const [mode, setMode] = useState("dark");

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "white"

    } else {
      setMode("light");
      document.body.style.backgroundColor = "#7c7da5"

    }
  }


  return (
    <>
      <BrowserRouter>
        <Navbar title="Textutils" mode={mode} togglemode={togglemode} abouttext="About Text" />
        <Routes>
          <Route path="/" element={<div className="container my-4">
            <Textform heading="Enter the text to analyze below" />
          </div>} />
          <Route path="/Accordian" element={<Accordian />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}


export default App;
