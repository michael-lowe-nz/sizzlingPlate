export const TOGGLE_MENU = 'nav/TOGGLE_MENU'

const initialState = {
  showMenu: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        showMenu: !state.showMenu
      }
    default:
      return state
  }
}

export const toggleMenu = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_MENU,
    })
  }
}
