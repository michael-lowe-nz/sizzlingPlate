export const ADD_DISH = 'session/ADD_DISH'
export const REMOVE_DISH = 'session/REMOVE_DISH'
export const ADD_SESSION = 'session/ADD_SESSION'
export const SET_DISH_INPUT = 'session/SET_DISH_INPUT'
export const ADD_DISH_VOTE = 'session/ADD_DISH_VOTE'
export const TOGGLE_SESSION_LOADING = 'session/TOGGLE_SESSION_LOADING'

const initialState = {
  title: '',
  sessionLoading: false,
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
      return {
        ...payload,
        dishes: state.dishes || []
      }
    case ADD_DISH:
      if (!state.dishes.find(dish => dish.id === payload.id)) {
        return {
          ...state,
          dishes: [
            payload,
            ...state.dishes
          ]
        }
      } else {
        return {
          ...state,
          dishes: state.dishes.map(dish => {
            if(dish.id === payload.id) return payload
            return dish
          })
        }
      }
    case REMOVE_DISH:
      return {
        ...state,
        dishes: state.dishes.filter(dish => dish.id !== payload)
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
    case TOGGLE_SESSION_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
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

export const removeDish = (dishId) => {
  return dispatch => {
    dispatch({
      type: REMOVE_DISH,
      payload: dishId
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

export const toggleSessionLoading = () => {
  return dispatch => dispatch({type: TOGGLE_SESSION_LOADING})
}
