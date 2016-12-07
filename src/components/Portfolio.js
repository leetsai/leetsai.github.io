import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <div className="projects">
        <div className="project">
          <h2> Wanderlist </h2>
          <h3> “Buzzfeed meets Reddit” </h3>

          <div className="project_meat">
            <div className="project_left">
              <img className="thumbnail" src="src/wanderlist2.png" alt="Image" />
              <span className="hover_text"> TESTING </span>
            </div>

            <div className="project_right">
              <div className="write-up">
                 <p>Wanderlist is a platform for authors and readers to create, comment, and vote on interesting lists</p>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <h2> Spontaneo </h2>
          <h3> "Need an adventure?" </h3>

          <div className="project_meat">
            <div className="project_left">
              <img className="thumbnail" src="src/spontaneo.png" alt="Image" />
            </div>

            <div className="project_right">
              <div className="write-up">
                <p>Spontaneo is an idea generating tool designed to help users discover fun activities and top-rated restaurants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;


// <img className="thumbnail" src="src/wanderlist2.png" alt="Image" />


// import React, { Component } from 'react';
//
// class Portfolio extends Component {
//   render() {
//     return (
//       <div className="projects">
//         <h1> Projects by Lee </h1>
//         <div className="project">
//           <img className="thumbnail" src="src/wanderlist2.png" alt="Image" />
//           <div className="write-up">
//              <p>Wanderlist is a platform for authors and readers to create, comment, and vote on interesting lists</p>
//           </div>
//         </div>
//
//         <div className="project">
          // <h2 className="project_title"> Spontaneo </h2>
          // <h3 className="project_caption"> "Need an adventure?" </h3>
//           <img className="thumbnail" src="src/spontaneo.png" alt="Image" />
//           <div className="write-up">
//             <p>Spontaneo is an idea generating tool designed to help users discover fun activities and top-rated restaurants</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Portfolio;
