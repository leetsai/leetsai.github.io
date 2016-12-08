import React, { Component } from 'react';
import { Link } from 'react-router';

class Portfolio extends Component {
  render() {
    return (
      <div className="projects">
        <div className="project">
          <div className="project_left">
            <a href="https://wanderlists.herokuapp.com" target="_blank">
              <img className="thumbnail" src="src/wanderlist2.png" alt="Image" />
            </a>
            <span className="hover_text"> TESTING </span>
          </div>

          <div className="project_right">
             <p>Wanderlist is a platform for authors and readers to create, comment, and vote on interesting lists</p><br></br>
             <p>Built in JavaScript and with React and Redux</p><br></br>
             <p>Check out the code-base here</p>
          </div>
        </div>

        <div className="project">
          <div className="project_left">
            <a href="https://spontaneo.herokuapp.com" target="_blank">
              <img className="thumbnail" src="src/spontaneo.png" alt="Image" />
            </a>
          </div>

          <div className="project_right">
            <p>Spontaneo is an idea generating tool designed to help users discover fun activities and top-rated restaurants</p><br></br>
            <p>Built in JavaScript and with Angular</p><br></br>
            <p>Check out the code-base here</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
