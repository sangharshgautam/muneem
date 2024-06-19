import React from 'react';
import './App.css';
import LeftNav from "./components/LeftNav";
import TopNavBar from "./components/TopNavBar";
import {BrowserRouter} from "react-router-dom";
import {Header} from "semantic-ui-react";

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
        <footer><Header as='h5'>© 2024 ACE-IT. All Rights Reserved.</Header></footer>
    </section>
  );
}

export default App;
