// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import MainLayout from './components/MainLayout';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Home from './components/Home';

// Routes
const routes = (
  <Router history={ browserHistory }>
    <Route component={ App }>
      <Route component={ MainLayout }>
        <Route path="/" component={ Home } />
        <Route path="/resume" component={ Resume } />
        <Route path="/about" component={ About } />
        <Route path="/portfolio" component={ Portfolio } />
      </Route>
    </Route>
  </Router>
);

export default routes;
