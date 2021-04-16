import React from 'react';
import './App.css';
import { Profile } from './components/Profile/Profile';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { Dialogs } from './components/Dialogs/Dialogs';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Dialogs />
        {/* <Profile/> */}
      </div>
    </div >
  );
}

export default App;
