import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/home/home.component';
import Privacy from './pages/privacy/privacy.component';
import Terms from './pages/terms/terms.component'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
