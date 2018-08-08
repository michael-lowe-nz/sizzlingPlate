import React from 'react';
import { connect } from 'react-redux';

import { firebase } from '../../firebase';

import MDSpinner from "react-md-spinner"

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      this.props.toggleIsDeterminingUser()
      firebase.auth.onAuthStateChanged(authUser => {
        this.props.toggleIsDeterminingUser()
        if (authUser) {
          this.props.setUser(authUser)
        } else {
          this.props.setUser(null)
        }
      });
    }

    render() {
      return !this.props.isDeterminingUser ?
        <Component />
        :
        <div style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <MDSpinner size={80}/>
        </div>
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    setUser: (authUser) => dispatch({ type: 'auth/SET_USER', payload: authUser }),
    toggleIsDeterminingUser: () => dispatch({ type: 'auth/TOGGLE_DETERMINING_USER'})
  });

  const mapStateToProps = ({ auth }) => ({
    user: auth.user,
    isDeterminingUser: auth.isDeterminingUser
  })

  return connect(mapStateToProps, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;