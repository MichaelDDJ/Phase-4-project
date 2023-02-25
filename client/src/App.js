import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Bookings from './Bookings';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav className='nav'>
            <h1>Title</h1>
            <NavLink to="/">Login</NavLink>
            <NavLink to="Home">Home</NavLink>
            <NavLink to="Bookings">My Bookings</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Bookings" element={<Bookings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
