import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import { Redirect } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {
  login,
} from '../../reducers/auth'
import { auth } from '../../firebase';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const loginContainerStyles = {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '50px 0',
}

const inputStyles = {
    marginBottom: '10px',
    width: '240px'
}

const loginButtonStyles = {
    marginTop: '30px',
    width: '240px'
}

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
          email: '',
          password: '',
          isSigningIn: false,
          error: null
        }
    }

    handleEmailChange (e) {
        e.preventDefault()
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange (e) {
        e.preventDefault()
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit (e) {
        e.preventDefault()
        this.setState({
            isSigningIn: true,
            error: null
        })
        auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
            .then(user => {
                this.props.history.push('/home')
            })
            .catch(error => {
                this.setState({
                    error,
                    isSigningIn: false
                })
            })
    }

    render() {
        if(this.props.user) {
            return <Redirect to={{
                // pathname: "/home",
                pathname: "/",
                state: { from: this.props.location }
            }}/>
        }

        return (
            <form onSubmit={this.handleSubmit} style={loginContainerStyles}>
                <TextField
                    autoFocus
                    label="email"
                    style={inputStyles}
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <TextField
                    style={inputStyles}
                    label="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                />
                {this.state.isSigningIn ?
                    <p>Please Wait...</p> :
                    <Button onClick={this.handleSubmit} type="submit" style={loginButtonStyles} variant="contained">Login</Button>
                }
                {
                    this.state.error ?
                    <p style={{color: 'red'}}>{this.state.error.message}</p> :
                    null
                }
            </form>
        )
    }
}

const mapDispatchToProps = dispatch =>
bindActionCreators({
    login,
    goHome: () => push(`/`),
}, dispatch)

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
  user: auth.user,
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)