export const ADD_DISH = 'session/ADD_DISH'
export const ADD_SESSION = 'session/ADD_SESSION'
export const SET_DISH_INPUT = 'session/SET_DISH_INPUT'
export const ADD_DISH_VOTE = 'session/ADD_DISH_VOTE'

const initialState = {
  title: 'Where are you?',
  dishInput: '',
  dishes: []
}

export default (state = initialState, { type, payload}) => {
  switch (type) {
    case SET_DISH_INPUT:
      return {
        ...state,
        dishInput: payload
      }
    case ADD_SESSION:
      return payload
    case ADD_DISH:
      return {
        ...state,
        dishes: [
          payload,
          ...state.dishes
        ]
      }
    case ADD_DISH_VOTE:
      return {
        ...state,
        dishes: state.dishes.map(dish => {
          if(dish.name === payload.dishName) {
            dish.votes = [...dish.votes, payload.vote]
          }
          return dish
        })
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

export const addDishVote = (dishName, vote) => {
  return dispatch => {
    dispatch({
      type: ADD_DISH_VOTE,
      payload: {
        vote,
        dishName
      }
    })
  }
}
