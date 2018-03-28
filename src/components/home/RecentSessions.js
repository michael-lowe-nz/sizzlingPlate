import React from 'react'
import Session from './Session'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  getSessions
} from '../../reducers/home'

class RecentSessions extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log('comp did mount:', this.props.sessionIds)
        this.props.getSessions(this.props.sessionIds)
    }
    render() {
        return (
            <div>
                {this.props.recentSessions.map(session => <Session key={session} />)}
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