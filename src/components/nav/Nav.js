import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleMenu } from '../../reducers/nav'
import { NavLink, withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import { css } from 'emotion'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'

class Nav extends React.Component {
  render() {
    const { classes } = this.props;

    const rootStyles = css`
      flex-grow: 1;
    `

    const flex = css`
      flex-grow: 1;
    `

    const menuButtonStyles = css`
      color: white;
      text-decoration: none;
    `

    const toolbar = css`
      background-color: #2196f3;
    `

    return (
      <div className={rootStyles}>
        <AppBar className={toolbar} position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={flex}>
              sizzlingPlate
            </Typography>
            {this.props.user ?
              <NavLink className={menuButtonStyles} to='/profile'>
                <IconButton color="inherit">
                  <AccountCircle />
                </IconButton>
              </NavLink>
              : 
              <NavLink className={menuButtonStyles} to="/login">
                <Button color="inherit">Login</Button>
              </NavLink>
            }
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMenu
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))