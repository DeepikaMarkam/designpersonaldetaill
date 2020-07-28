import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './componets/Footer';
import NavBar from './componets/NavBar';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <br></br>
      <Profile/>
      <br></br>
      <Footer/>
    </div>
  );
}

export default App;
