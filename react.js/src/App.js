import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import Counter from './Components/Counter';
import Form from './Components/Form'; // Import the Form component

function App() {
  const features = ["Feature 1", "Feature 2", "Feature 3"];

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
        <MainContent features={features} />
      </div>
      <Counter />
      <Form /> {/* Include the Form component */}
    </div>
  );
}

export default App;
