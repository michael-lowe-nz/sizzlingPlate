import React from 'react'

const Dish = ({dish}) => (
  <div className="dish column is-12">
    <div className="columns">
      <div className="column is-2">
        <strong>{dish.name}</strong>
      </div>
      <div className="column is-4">
        <div className="field has-addons is-right">
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

export default Dish
