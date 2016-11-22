// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';

// Routes
const routes = (
  <Router history={ browserHistory }>
    <Route component={ App }>
      <Route component={ MainLayout }>
        <Route path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/portfolio" component={ Portfolio } />
        <Route path="/blog" component={ Blog } />
      </Route>
    </Route>
  </Router>
);

export default routes;
