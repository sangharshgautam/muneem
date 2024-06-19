import React from 'react';
import './App.css';
import LeftNav from "./components/LeftNav";
import TopNavBar from "./components/TopNavBar";

function App() {
  return (
    <section className="App">
        <header>
            <TopNavBar></TopNavBar>
        </header>
        <div>
            <LeftNav/>
        </div>
        <footer>footer: fixed height in px</footer>
    </section>
  );
}

export default App;
