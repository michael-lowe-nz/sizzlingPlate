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
};

const Nav = ({ user }) => {
  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <Typography style={{flexGrow: '1'}} variant="title" color="inherit">
          <NavLink to='/' tag="a" className="navbar-item">sizzlingPlate</NavLink>
        </Typography>
        { user ?
          <NavLink to='/session'><Button>{user.email}</Button></NavLink> :
          <NavLink to='/login'><Button>Login</Button></NavLink>
        }
        <NavLink to='/about'><Button>About</Button></NavLink>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMenu
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Nav)))
