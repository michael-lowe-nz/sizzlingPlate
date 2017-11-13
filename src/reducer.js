module.exports = (state, action) => {
  const newState = require('clone')(state)
  const {type, payload} = action
  switch (type) {
    case 'RECEIVE_SESSION':
      newState.title = payload.title
      newState.location = payload.Location
      return newState
    case 'HANDLE_INPUT':
      newState.dishInput = payload
      return newState
    case 'RECEIVE_DISH':
      newState.dishes.push(payload)
      return newState
    default:
      return newState
  }
}
