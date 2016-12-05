import React, { Component } from 'react';


class Resume extends Component {
  render() {
    return (
      <div>
        <object id="resume" data="src/Resume_Tsai.pdf#page=1zoom=450" type="application/pdf">
        </object>
      </div>
    );
  }
}

export default Resume;
