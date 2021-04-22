import React from 'react';
import './App.css';
import { Profile } from './components/Profile/Profile';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { Dialogs } from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData}/>} />
          <Route path="/profile" render={() => <Profile postsData={props.postsData}/>} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
