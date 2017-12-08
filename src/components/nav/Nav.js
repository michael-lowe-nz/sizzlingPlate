import React from 'react'
import {
  NavLink
} from 'react-router-dom'
import { Link } from 'react-router-dom'


const Nav = () => (
  <div className='navbar is-light'>
    <div className="container">
      <div className="navbar-brand">
        <NavLink to='/' tag="a" className="navbar-item">sizzlingPlate<i className="fa fa-delete"></i></NavLink>
      </div>
      <div className="navbar-menu is-mobile">
        <div className="navbar-end">
          <NavLink to='/about' activeClassName='is-active' tag='a' className='navbar-item'>About</NavLink>
          <NavLink to='/session' activeClassName='is-active' tag='a' className='navbar-item'>My Session</NavLink>
        </div>
      </div>
    </div>
  </div>
)

export default Nav

// import React from 'react';
// export default class Nav extends React.Component {
//  render () {
//    console.log('props:', this.props);
//    // const {dish} = this.props.dishReducer;
//    return (
//      <nav>
//        <ul>
//          <li>Hom</li>
//          <li>About</li>
//        </ul>
//      </nav>
//    )
//  }
// }
