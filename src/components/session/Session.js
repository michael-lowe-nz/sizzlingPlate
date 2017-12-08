import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { ADD_DISH } from '../../reducers/session'

const Session = props => {
  console.log('props:', props);
  return (
    <div className="container">
      <div className="section">
        <div className="session">
          <div className="columns session-header">
            <div className="column is-5">
              <h1 className="title is-4">{props.title}</h1>
              <a className="button is-outlined">Share Link</a>
            </div>
            <div className="column is-7">
              <div className="session-users">
                <div className="user is-active">
                  <p>Michael</p>
                </div>
                <div className="user">
                  <p>Peter</p>
                </div>
                <div className="user">
                  <p>T-Dawg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  dishes: state.session.dishes,
  title: state.session.title
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ADD_DISH,
  changePage: () => push('/session')
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Session)
