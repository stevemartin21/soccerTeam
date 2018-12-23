import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CityLogo } from './ui/icons';

 class Header extends Component {
  render() {
    return (
      <div>
          
<nav className="navbar navbar-expand-lg navbar-dark primary-color">
  <CityLogo 
  link={true}
  linkTo='/'
  />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="basicExampleNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to='/' className="nav-link" >Home
          <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to='/theTeam' className="nav-link" >The Team</Link>
      </li>
      <li className="nav-item">
        <Link to='/theMatches' className="nav-link" >Matches</Link>
      </li>
      
    </ul>
  </div>
</nav>
</div>

    )
  }
}


export default Header;