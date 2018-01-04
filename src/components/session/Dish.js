import React from 'react'
import {bindActionCreators} from 'redux'
import {
  addDishVote
} from '../../reducers/session'
import {connect} from 'react-redux'


const Dish = ({dish}) => (
  <div className="dish column is-12">
    <div className="columns">
      <div className="column is-2">
        <strong>{dish.name}</strong>
      </div>
      <div className="column is-4">
        <div className="field has-addons">
          <p className="control">
            <a className="button is-medium"><span role="img" aria-label="thumbs up">👍</span></a>
          </p>
          <p className="control">
            <a className="button is-medium"><span role="img" aria-label="licking lips emoji">👎</span></a>
          </p>
          <p className="control">
            <a className="button is-medium"><span role="img" aria-label="licking lips emoji">✏️</span></a>
          </p>
        </div>
      </div>
    </div>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  addDishVote,
}, dispatch)

export default connect(() => ({}), mapDispatchToProps)(Dish)
