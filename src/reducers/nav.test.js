import reducer from './nav';
import expect from 'expect';

describe('session reducer', () => {
  it('should handle TOGGLE_MENU', () => {
    const initialState = {
      showMenu: true
    }

    const expectedState = {
      showMenu: false
    }

    const actualState = reducer(initialState, {
      type: 'nav/TOGGLE_MENU'
    })

    expect(actualState).toEqual(expectedState)
  })

})
