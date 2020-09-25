import React from 'react';
import './App.css';
import {
    BrowserRouter as Router
} from "react-router-dom";
import history from './services/history'
import Mycv from "./features/home/pages/index";

function App() {
  return (
      <Router history={history}>
        <Mycv />
      </Router>
  );
}

export default App;
