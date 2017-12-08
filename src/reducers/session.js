export const ADD_DISH = 'session/ADD_DISH'
export const ADD_SESSION = 'session/ADD_SESSION'

const initialState = {
  title: 'Extravagant Party Larty',
  dishes: [
    {name: 'Pad-Thai'}
  ]
}

export default (state = initialState, action) => {
  console.log('ADD_DISH is:', ADD_DISH)
  switch (action.type) {
    case ADD_SESSION:
      return action.payload
    case ADD_DISH:
      return {
        ...state,
        dishes: [...state.dishes, action.payload]
      }
    default:
      return state
  }
}

export const addSession = (session) => {
  return dispatch => {
    dispatch({
      type: ADD_SESSION,
      payload: session
    })
  }
}

export const addDish = (dish) => {
  return dispatch => {
    dispatch({
      type: ADD_DISH,
      payload: dish
    })
  }
}
