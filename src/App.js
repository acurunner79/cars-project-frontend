import logo from './logo.svg';
import React from "react"
import './App.css';
import Display from "./Display"
import Form from './Form'
import { Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1>Welcome to your garage!</h1>
        <Display />
        <Link to="/create">
        <button>Start your garage</button>
        </Link>
        <Form />
    </div>
  );
}

export default App;
