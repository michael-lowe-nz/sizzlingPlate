import React from 'react';
import { connect } from 'react-redux';

import setUser from '../../reducers/auth'

import firebase from '../firebase';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      firebase.auth().onAuthStateChanged(authUser => {
        console.log('Auth status changed:', authUser);
        authUser
          ? this.props.setUser(authUser)
          : this.props.setUser(null);
      });
    }

    render() {
      return (
        <Component />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    setUser: (authUser) => dispatch({ type: 'SET_USER', authUser }),
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;