import React from 'react'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import { auth } from '../../firebase'

const profileContainerStyles = {
    flexDirection: 'column',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const Profile = ({ user, logout, history }) => (
    <div style={profileContainerStyles}>
        <a href={`mail-to:${user}`}>{user && user.email}</a>
        <Button variant="contained" color="secondary" onClick={() => {
            console.log('Logging out');
            auth.doSignOut()
                .then(() => history.push('/login'))
        }}>Logout</Button>
    </div>
)

const mapStateToProps = ({auth}) => ({
  user: auth.user
})

export default connect(mapStateToProps, null)(Profile)