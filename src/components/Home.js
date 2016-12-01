import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="biography">
        <img id="profile_picture" src="src/css/leetsai.png" alt="profile_picture" />

        <p className="intro">
          <div id="first_line">Hi, I'm Lee!</div>
          <div id="the_rest">
            a full-stack web developer <br></br>
            working in San Francisco
          </div>
        </p>

        <div className="social_media">
          <a href="https://linkedin.com/in/leetsai" target="_blank"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true" id="linkedin"></i></a>
          <a href="https://github.com/leetsai" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true" id="github"></i></a>
          <a href="https://angel.co/leetsai" target="_blank"><i className="fa fa-angellist fa-2x" aria-hidden="true" id="angellist"></i></a>
        </div>
      </div>
    );
  }
}

export default Home;
