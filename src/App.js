import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import {routes} from './routes.js'

export default function App() {
  return (
    <Router>
      <div className='main'>
       <Switch> 
        {
          routes.map(route => (
            <Route exact={route.exact} path={route.path} key={route.toString()}>
            {route.component}
          </Route>
          ))
        }
       </Switch>
      </div>
    </Router>
  );
}