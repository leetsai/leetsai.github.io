// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

// Routes
const routes = (
  <Router history={ browserHistory }>
    <Route component={ App }>
      <Route component={ MainLayout }>
        <Route path="/" component={ Home } />
        <Route path="/portfolio" component={ Portfolio } />
      </Route>

      <Route path="/resume" component={ Resume } />
    </Route>
  </Router>
);

export default routes;
