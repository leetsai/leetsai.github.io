import React, { Component } from 'react';
import { Link } from 'react-router';

class About extends Component {
  render() {
    return (
      <div>
        Check out my <Link to="/resume">Resume</Link> here
      </div>
    );
  }
}

export default About;
