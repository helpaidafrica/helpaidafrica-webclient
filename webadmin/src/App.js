import React from 'react';
import logo from './logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p><img src={logo} className="App-logo" alt="logo" style={{height: 200, width: 200}} /><br/></p>
        <p>
          Welcome to HelpAidAfrica Web Admin ({process.env.REACT_APP_BUILD_ENV})
        </p>
      </header>
    </div>
  );
}

export default App;
