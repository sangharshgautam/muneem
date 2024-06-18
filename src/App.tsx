import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import LeftNav from "./components/LeftNav";
import NavBar from "./components/NavBar";

function App() {
  return (
    <section className="App">
        <header><NavBar></NavBar></header>
          <div>
              <LeftNav/>
          </div>
        <footer>footer: fixed height in px</footer>
    </section>
  );
}

export default App;
