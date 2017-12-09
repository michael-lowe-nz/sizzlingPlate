export const ADD_DISH = 'session/ADD_DISH'
export const ADD_SESSION = 'session/ADD_SESSION'
export const SET_DISH_INPUT = 'session/SET_DISH_INPUT'

const initialState = {
  title: 'Extravagant Party Larty',
  dishInput: '',
  dishes: [
    {name: 'Pad-Thai'}
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DISH_INPUT:
      return {
        ...state,
        dishInput: action.payload
      }
    case ADD_SESSION:
      return action.payload
    case ADD_DISH:
      return {
        ...state,
        dishes: [action.payload, ...state.dishes]
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

export const setDishInput = (value) => {
  return dispatch => {
    dispatch({
      type: SET_DISH_INPUT,
      payload: value
    })
  }
}
