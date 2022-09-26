import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import Stock from './Stock';
import stockData from '../data.json'

function Main(props) {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route
          path="/stocks/:symbol"
          render={(props) => < Stock stockData={stockData} {...props} />
          }
        />
        <Route
          path="/stocks"
          render={(props) => <Dashboard {...props} stockData={stockData} />
          }
        />
      </Switch>
    </main>
  );
}

export default Main;