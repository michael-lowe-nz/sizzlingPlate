import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {
  login,
} from '../../reducers/auth'

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

    handleSubmit () {
        this.props.goHome()
        // this.props.login(this.state.email, this.state.password)
        //     .then(() => this.props.goHome())
    }

    render() {
        return (
            <div style={loginContainerStyles}>
                <p>{this.props.isLoggedIn ? 'Logged In!' : 'Please login...'}</p>
                <TextField
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
                <Button onClick={this.handleSubmit} type="submit" style={loginButtonStyles} variant="contained">Login</Button>
            </div>
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