import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';

function App() {
  return (
    <div className="App">
    <Header />
    <div>
        <Sidebar/><MainContent/>
    </div>
    </div>
  );
}

export default App;
