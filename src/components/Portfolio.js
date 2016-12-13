import React, { Component } from 'react';
import { Link } from 'react-router';

class Portfolio extends Component {
  render() {
    return (
      <div className="projects">
        <div className="project">
          <a href="https://wanderlists.herokuapp.com" target="_blank">
            <img className="thumbnail" src="src/wanderlist2.png" alt="Image" />
          </a>
          <p><span className="highlight_text">Wanderlist</span> is a platform for users to <span className="highlight_text3">create</span>, <span className="highlight_text3">comment</span>, and <span className="highlight_text3">vote</span> on interesting lists<br></br><br></br>
            Built in JS with <span className="highlight_text2">React</span> and <span className="highlight_text2">Redux</span><br></br><br></br>
            Check out the code-base <span className="spacing"></span><a href="https://github.com/lentata/WanderList" target="_blank"><span className="underline">here</span></a>
          </p>
        </div>

        <div className="project">
          <a href="https://spontaneo.herokuapp.com" target="_blank">
            <img className="thumbnail" src="src/spontaneo.png" alt="Image" />
          </a>
          <p><span className="highlight_text">Spontaneo</span> is an idea generating tool designed to help users <span className="highlight_text3">discover</span> fun activities and top-rated restaurants<br></br><br></br>
            Built in JS with <span className="highlight_text4">Angular</span><br></br><br></br>
            Check out the code-base <span className="spacing"></span><a href="https://github.com/dial-up/spontaneo" target="_blank"><span className="underline">here</span></a>
          </p>
        </div>
      </div>
    );
  }
}

export default Portfolio;
