import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, message: "Hi, everyone!", likesCount: "47" },
  { id: 2, message: "Hello, it's my fist post.", likesCount: "6" },
  { id: 3, message: "Hellow", likesCount: "0" },
];

let dialogsData = [
  { id: 1, name: "Bob" },
  { id: 2, name: "Victor" },
  { id: 3, name: "Vasil" },
  { id: 4, name: "Margo" },
  { id: 5, name: "Max" },
  { id: 6, name: "Ales" },
];

let messagesData = [
  { id: 1, message: "How are you?" },
  { id: 2, message: "Yo!!!" },
  { id: 3, message: "Hellow " },
  { id: 4, message: "Hi" },
]

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
