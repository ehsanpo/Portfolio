import React from 'react'
import { Router, NavLink} from 'react-static'
import logo from '../../logo.svg';
class HeaderComp extends React.Component {

  render(){

    return(
            <header className="wrapper center">
                <NavLink exact to="/" activeClassName="active-logo" ><img width="140" src={logo} alt="Ehsan Pourhadi" className="logo" /></NavLink>
                <h1>Ehsan Pourhadi  <span>Creative Developer</span> </h1>
                <nav>
                    <ul>
                        <li>
                         <NavLink to="/work">Work</NavLink>
                        </li>
                         <li>
                         <NavLink to="/skills">Skills</NavLink>
                        </li>
                        <li>
                         <NavLink to="/music">Music</NavLink>
                        </li>
                        <li>
                          <NavLink to="/about">About</NavLink>
                        </li>
                       
                    </ul>
                </nav>
            </header>
      )
  }

}

export default HeaderComp;