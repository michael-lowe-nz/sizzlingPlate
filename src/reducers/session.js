export const ADD_DISH = 'session/ADD_DISH'
export const ADD_SESSION = 'session/ADD_SESSION'
export const INCREMENT_COUNT = 'session/INCREMENT_COUNT'

const initialState = {
  title: 'Extravagant Party Larty',
  count: '1',
  dishes: [
    {name: 'Pad-Thai'}
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {...state, count: state.count + 1}
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

export const incrementCount = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_COUNT,
    })
  }
}
