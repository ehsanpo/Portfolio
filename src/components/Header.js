import React from 'react'
import { Router, NavLink} from 'react-static'
import logo from '../../logo.svg';
class HeaderComp extends React.Component {


 handleClick(e) {
        var particle, theta, force, touch, max, i, j, n;
        touch = window.demo.touches[i], max = random( 1, 4 );
        for ( j = 0; j < max; j++ ) {
         window.demo.spawn( e.nativeEvent.clientX, e.nativeEvent.clientY );
        }
  }
  render(){

    return(
  
            <header className="wrapper center" onClick={(e) => this.handleClick(e)}>
                <NavLink exact to="/" activeClassName="active-logo" ><img width="140" src={logo} alt="Ehsan Pourhadi" className="logo" /></NavLink>
                <h1>Ehsan Pourhadi  <span>Web Developer <i className="red">/</i> Music Producer <i className="red">/</i> Problem Solver</span> </h1>
                <nav>
                    <ul>
                        <li>
                         <NavLink   to="/work">Work</NavLink>
                        </li>
                         <li>
                         <NavLink  to="/skills">Skills</NavLink>
                        </li>
                        <li>
                         <NavLink   to="/music">Music</NavLink>
                        </li>
                        <li>
                          <NavLink   to="/about">About</NavLink>
                        </li>
                       
                    </ul>
                </nav>
            </header>
      )
  }

}

export default HeaderComp;