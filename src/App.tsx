import React from 'react';
import './App.css';
import LeftNav from "./components/LeftNav";
import TopNavBar from "./components/TopNavBar";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <section className="App">
        <header>
            <TopNavBar></TopNavBar>
        </header>
        <div>
            <BrowserRouter>
                <LeftNav/>
            </BrowserRouter>
        </div>
        <footer>footer: fixed height in px</footer>
    </section>
  );
}

export default App;
