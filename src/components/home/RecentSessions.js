import React from 'react'
import Session from './Session'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  getSessions
} from '../../reducers/home'

class RecentSessions extends React.Component {
    componentDidMount() {
        this.props.getSessions(this.props.sessionIds)
    }
    render() {
        return (
            <div>
                {this.props.recentSessions.map(session => <Session key={session.id} {...session}/>)}
            </div>
        )
    }
}

const mapStateToProps = ({home}) => ({
    recentSessions: home.recentSessions,
})
  
const mapDispatchToProps = dispatch => bindActionCreators({
getSessions
}, dispatch)
  
  export default connect(mapStateToProps, mapDispatchToProps)(RecentSessions)