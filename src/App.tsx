import React from 'react';
import './App.css';
import SectionComp from './components/SectionComp';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <SectionComp name="TD3 Studios Home" color="#bbccdd" />
        <SectionComp name="About" color="#88bbbb" />
        <SectionComp name="Projects" color="#448899" />
        <SectionComp name="Contact" color="#55aaaa" />
      </div>
    </div>
  );
}

export default App;
