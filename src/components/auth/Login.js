import React from 'react'
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
    render() {
        return (
            <div style={loginContainerStyles}>
                <TextField
                    label="email"
                    style={inputStyles}
                />
                <TextField
                    style={inputStyles}
                    label="password"
                    type="password"
                    autoComplete="current-password"
                />
                <Button style={loginButtonStyles} variant="contained">Login</Button>
            </div>
        )
    }
}

export default Login