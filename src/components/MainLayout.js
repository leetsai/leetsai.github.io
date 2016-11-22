import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="navigation">
          <ul>
            <li className="pages"><Link to="/">Home</Link></li>
            <li className="pages"><Link to="/resume">Resume</Link></li>
            <li className="pages"><Link to="/portfolio">Portfolio</Link></li>
            <li className="pages"><Link to="/about">About</Link></li>
          </ul>
        </div>

        <main>
          {this.props.children}
        </main>

        <footer>
          <div id="copyright">
            © COPYRIGHT 2016-17
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
