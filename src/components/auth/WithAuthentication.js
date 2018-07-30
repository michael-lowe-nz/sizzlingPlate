import React from 'react';
import { connect } from 'react-redux';

import { firebase } from '../../firebase';

import MDSpinner from "react-md-spinner"

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.props.setUser(authUser)
        } else {
          this.props.setUser(null);
        }
      });
    }

    render() {
      console.log('this.props', this.props.user)
      return this.props.user ?
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
  });

  const mapStateToProps = ({ auth }) => ({
    user: auth.user
  })

  return connect(mapStateToProps, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;