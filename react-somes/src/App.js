import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Events from './pages/Events.jsx';
import Academics from './pages/Academics.jsx';
import Contact from './pages/Contact.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Academics" element={<Academics />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;