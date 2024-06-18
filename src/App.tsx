import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import LeftNav from "./components/LeftNav";

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
