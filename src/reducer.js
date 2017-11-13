module.exports = (state, action) => {
  const newState = require('clone')(state)
  const {type, payload} = action
  switch (type) {
    case 'HANDLE_INPUT':
      newState.current = payload
      return newState
    case 'SEND_MESSAGE':
      newState.messages.push(payload)
      return newState
    default:
      return newState
  }
}
