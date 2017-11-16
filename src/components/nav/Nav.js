import React from 'react'
import {
  NavLink
} from 'react-router-dom'

const Nav = () => (
  <div className='navbar is-light' activeClassName="active">
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
