import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="col" id="left">
          {this.props.children}

          <footer>
            <span id="copyright">
              © COPYRIGHT 2016-17
            </span>
          </footer>
        </div>

        <div className="col" id="right">
          <div className="tiles">
            <div className="tile">
              <Link to="/">
                <div className="tile_content">Home</div>
              </Link>
            </div>
            <div className="tile">
              <Link to="/resume">
                <div className="tile_content">Resume</div>
              </Link>
            </div>
            <div className="tile">
              <Link to="/portfolio">
                <div className="tile_content">Portfolio</div>
              </Link>
            </div>
            <div className="tile">
              <Link to="/blog">
                <div className="tile_content">Blog</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
