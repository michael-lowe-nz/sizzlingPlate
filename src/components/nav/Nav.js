import React from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { toggleMenu } from '../../reducers/nav'
import { NavLink, withRouter } from 'react-router-dom'

const Nav = ({toggleMenu, showMenu}) => {

  function handleMenuBlur (e) {
    e.preventDefault()
    if(showMenu) toggleMenu()
  }

  return (
  <div className='navbar is-light is-fixed-top'>
    <div className="container">
      <div className="navbar-brand">
        <NavLink to='/' tag="a" className="navbar-item">sizzlingPlate<i className="fa fa-delete"></i></NavLink>
        <button onClick={toggleMenu} className={`button is-light navbar-burger ${showMenu ? "is-active" : ""}`}><span></span><span></span><span></span></button>
      </div>
      <div id="activeMenu" onBlur={handleMenuBlur} className={`navbar-menu ${showMenu ? "is-active" : ""}`}>
        <div className="navbar-end">
          <NavLink to='/about' activeClassName='is-active' tag='a' className='navbar-item'>About</NavLink>
          <NavLink to='/session' activeClassName='is-active' tag='a' className='navbar-item'>My Session</NavLink>
        </div>
      </div>
    </div>
  </div>
)}

// export default Nav

const mapStateToProps = ({nav}) => ({
  showMenu: nav.showMenu
})

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMenu
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))
