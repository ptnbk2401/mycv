import React from 'react';
import './App.css';
import LayoutComponent from "./components/layout/default";
import Routers from "./router/router";
import {
    BrowserRouter as Router
} from "react-router-dom";
import history from './services/history'

function App() {
  return (
      <Router history={history}>
          <LayoutComponent>
            <Routers />
          </LayoutComponent>
      </Router>
  );
}

export default App;
