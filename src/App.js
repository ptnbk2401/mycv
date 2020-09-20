import React from 'react';
import './App.css';
import {
    BrowserRouter as Router
} from "react-router-dom";
import history from './services/history'
import Mycv from "./pages/mycv/mycv";

function App() {
  return (
      <Router history={history}>
        <Mycv />
      </Router>
  );
}

export default App;
