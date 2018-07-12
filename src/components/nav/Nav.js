import React from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { toggleMenu } from '../../reducers/nav'
import { NavLink, withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Nav = ({toggleMenu, showMenu}) => {

  function handleMenuBlur (e) {
    e.preventDefault()
    if(showMenu) toggleMenu()
  }

  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <Typography style={{flexGrow: '1'}} variant="title" color="inherit">
          <NavLink to='/' tag="a" className="navbar-item">sizzlingPlate</NavLink>
        </Typography>
        <NavLink to='/about'><Button>About</Button></NavLink>
        <NavLink to='/session'><Button>My Session </Button></NavLink>
      </Toolbar>
    </AppBar>
  )

  // return (
  // <div className='navbar is-light is-fixed-top'>
  //   <div className="container">
  //     <div className="navbar-brand">
  //       <NavLink to='/' tag="a" className="navbar-item">sizzlingPlate<i className="fa fa-delete"></i></NavLink>
  //       <button onClick={toggleMenu} className={`button is-light navbar-burger ${showMenu ? "is-active" : ""}`}><span></span><span></span><span></span></button>
  //     </div>
  //     <div id="activeMenu" onBlur={handleMenuBlur} className={`navbar-menu ${showMenu ? "is-active" : ""}`}>
  //       <div className="navbar-end">
  //         <NavLink to='/about' activeClassName='is-active' tag='a' className='navbar-item'>About</NavLink>
  //         <NavLink to='/session' activeClassName='is-active' tag='a' className='navbar-item'>My Session</NavLink>
  //       </div>
  //     </div>
  //   </div>
  // </div>)
}

const mapStateToProps = ({nav}) => ({
  showMenu: nav.showMenu
})

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMenu
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Nav)))
