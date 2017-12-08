import { ADD_DISH } from ‘../types/message’;
export const ADD_DISH = (dish) => {
  return dispatch => {
    dispatch({
       type: ADD_DISH,
       payload: dish
    })
  }
}
