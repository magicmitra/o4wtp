import React from 'react';
import logo from './logo.svg';
import './App.module.css';
import LandingPage from './pages/Landing';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingPage/>
    </div>
  );
}

export default App;
