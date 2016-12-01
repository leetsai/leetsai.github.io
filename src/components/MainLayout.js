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
              <Link to="/about">
                <div className="tile_content">About</div>
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




// <div className="navbar">
//   <ul className="navigation">
//     <li className="pages"><Link to="/blog">Blog</Link></li>
//     <li className="pages"><Link to="/portfolio">Portfolio</Link></li>
//     <li className="pages"><Link to="/about">About</Link></li>
//     <li className="pages"><Link to="/">Home</Link></li>
//   </ul>
// </div>


// <div>
//   <div className="tiles"><Link to="/about">WHERE ARE YOU</Link></div>
// </div>
