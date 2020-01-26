import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from './pages/Login'
import DashboardPage from './pages/Dashboard'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
