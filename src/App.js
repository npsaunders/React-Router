import React from 'react';
import './App.css';

//Import route and components
import { Route, Switch } from "react-router-dom";
import Stocks from "./pages/Stocks";
import Main from "./pages/Main";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Nav from './components/Nav';
import stockData from './data.json';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/stocks">
          <Dashboard stockData={stockData} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route
          path="/stocks/:symbol"
          render={props => <Stocks stockData={stockData} {...props} />}
        />
      </Switch>
    </div >
  );
}

export default App;
