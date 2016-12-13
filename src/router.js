// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-88912746-1');

// Components
import App from './components/App';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function fireTracking() {
  ReactGA.pageview(window.location.hash);
}

// Routes
const routes = (
  <Router onUpdate={ fireTracking } history={ browserHistory }>
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
