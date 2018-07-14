import React from 'react';
import { connect } from 'react-redux';

import {firebase} from '../../firebase';

const withAuthentication = (Component) => {
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
      return (
        <Component />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    setUser: (authUser) => dispatch({ type: 'auth/SET_USER', payload: authUser }),
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;