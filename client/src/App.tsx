import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("/ping")
      .then(response => response.json())
      .then(data => {
        alert(JSON.stringify(data));
      });
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src='/images/4science.jpg' className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
