import React from 'react'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const loginContainerStyles = {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center'
}

class Login extends React.Component {
    render() {
        return (
            <div style={loginContainerStyles}>
                <TextField
                    label="email"
                />
                <TextField
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    // margin="normal"
                />
            </div>
        )
    }
}

export default Login