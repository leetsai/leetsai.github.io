import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="navbar">
          <ul className="nav_routes">
            <Link to="/"><li className="nav_words">Home</li></Link>
            <Link to="/resume"><li className="nav_words">Resume</li></Link>
            <Link to="/portfolio"><li className="nav_words">Portfolio</li></Link>
          </ul>
          <li className="nav_words nav_dropdown">&#9776;
            <ul className="dropdown_content">
              <Link to="/"><li>Home</li></Link>
              <Link to="/resume"><li>Resume</li></Link>
              <Link to="/portfolio"><li>Portfolio</li></Link>
            </ul>
          </li>
        </div>

        {this.props.children}

        <div id="copyright">
          © COPYRIGHT 2016-17
        </div>
      </div>
    );
  }
}

export default Home;
