import React from 'react'
import Session from './Session'
import {bindActionCreators} from 'redux'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import {
  getSessions
} from '../../reducers/home'

class RecentSessions extends React.Component {
    componentDidMount() {
        const idsNotInState = this.props.sessionIds.filter(id => {
            return !this.props.recentSessions.find(session => id === session.id)
        })
        this.props.getSessions(idsNotInState)
    }
    render() {
        return (
            <div className="columns is-multiline">
                <div className="column is-12">Recent...</div>
                {this.props.recentSessions
                    .map(session => <Session key={session.id} {...session} goToSession={this.props.goToSession}/>)}
            </div>
        )
    }
}

const mapStateToProps = ({home}) => ({
    recentSessions: home.recentSessions,
})
  
const mapDispatchToProps = dispatch => bindActionCreators({
    getSessions,
    goToSession: (id) => push(`session/${id}`)
}, dispatch)
  
  export default connect(mapStateToProps, mapDispatchToProps)(RecentSessions)