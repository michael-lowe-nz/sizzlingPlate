export const ADD_DISH = 'dishes/ADD_DISH'

const initialState = {
  title: 'Extravagant Party Larty',
  
  dishes: [
    {name: 'Pad-Thai'}
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DISH:
      return {
        ...state,
        dishes: [
          ...state, action.payload
        ]
      }
    default:
      return state
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
