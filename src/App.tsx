import React from 'react';
import './App.css';
import SectionComp from './components/SectionComp';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <SectionComp name="TD3 Home" color="#bbccdd" />
        <SectionComp name="TD3 About" color="#88bbbb" />
        <SectionComp name="TD3 Projects" color="#448899" />
        <SectionComp name="TD3 Contact" color="#55aaaa" />
      </div>
    </div>
  );
}

export default App;
