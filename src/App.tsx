import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import LeftNav from "./components/LeftNav";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">

      <div>
        <LeftNav></LeftNav>
        {/*<Main></Main>*/}
      </div>
    </div>
  );
}

export default App;
