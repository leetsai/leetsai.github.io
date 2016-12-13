import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="biography">
        <p className="intro">
          <span id="first_line"> Hi.</span><br></br>
          <span className="the_rest">
            I'm <span className="highlight_text">Lee</span>, a <span className="highlight_text">hacker</span><br></br>
            in San Francisco <span className="highlight_text">&#10073;</span>
          </span>
        </p>
      </div>
    );
  }
}

export default Home;


// <img id="profile_picture" src="src/css/leetsai.png" alt="profile_picture" />
// <div className="social_media">
//   <a href="https://linkedin.com/in/leetsai" target="_blank"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true" id="linkedin"></i></a>
//   <a href="https://github.com/leetsai" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true" id="github"></i></a>
//   <a href="https://angel.co/leetsai" target="_blank"><i className="fa fa-angellist fa-2x" aria-hidden="true" id="angellist"></i></a>
// </div>
