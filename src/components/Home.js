import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="biography">
            <img id="profile_picture" src="src/css/leetsai.png" alt="profile_picture" />
            <p id="first_line">Hey, I'm Lee,</p>
            <p id="second_line">an American full-stack developer working</p>
            <p id="third_line">in San Francisco</p>

            <div className="social_media">
              <a href="https://linkedin.com/in/leetsai"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
              <i className="fa fa-github fa-2x" aria-hidden="true"></i>
              <i className="fa fa-angellist fa-2x" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
