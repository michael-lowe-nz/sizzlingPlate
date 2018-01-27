import React from 'react'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const NewSession = ({changePage}) => {
  function handleNewSession (e) {
    e.preventDefault()
    changePage(1);
  }
  return (
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-4">
            <button onClick={handleNewSession} className="button">New Session</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch =>
bindActionCreators({
  changePage: (id) => push(`session/${id}`)
}, dispatch)

export default connect(() => ({}), mapDispatchToProps)(NewSession)
