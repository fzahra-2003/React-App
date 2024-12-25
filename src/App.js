import './App.css';
import Module from './Module';
import React from 'react';
import Etudiant from './Etudiant';
import Users from './Users';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        {/* <h1>Modules</h1>
        <Module nom="Site Statique" coefficient="3" category="Web"/>
        <h1>----</h1>
        <Module nom="Site Dynamique" coefficient="5" category="Web"/>
        <h1>----</h1>
        <Module nom="Android" coefficient="2" category="Mobile"/>
        <hr/>
        <Etudiant/>
        <Users/> */}
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
