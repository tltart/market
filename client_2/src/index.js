import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ButtonAppBar from './components/NavBar'
import BasicImageList from './components/Menu'
import Header from './components/Header/header_video'

ReactDOM.render(
  <React.StrictMode>
    <ButtonAppBar />
    <Header />
    <BasicImageList />
    
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
