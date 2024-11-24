import React from 'react'
import { Link , Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import User from './Components/User';
import Nav from './Components/Nav';
import Routing from './utils/Routing';

function App() {
  return (
    <>
      <Nav />
      <Routing />   
    </>
  )
}

export default App

// Navigation bar ko static banana hai