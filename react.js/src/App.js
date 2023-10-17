import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import Counter from './Components/Counter'; // Import the Counter component

function App() {
  const features = ["Feature 1", "Feature 2", "Feature 3"];

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
        <MainContent features={features} /> {/* Pass features as a prop to MainContent */}
      </div>
      <Counter /> {/* Include the Counter component */}
    </div>
  );
}

export default App;
