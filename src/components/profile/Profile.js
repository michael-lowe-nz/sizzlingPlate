import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { auth } from '../../firebase'


const Profile = ({ user, logout, history }) => (
    <div>
        <h1>{user && user.email}</h1>
        <Button onClick={() => {
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