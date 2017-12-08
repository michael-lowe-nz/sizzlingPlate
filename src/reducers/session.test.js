import reducer from './session';
import expect from 'expect';

describe('session reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      dishes: [
        {name: 'Pad-Thai'}
      ],
      title: 'Extravagant Party Larty'
    }
    expect(reducer(undefined, {})).toEqual(expectedState)
  })

  it('should handle ADD_DISH', () => {
    const initialState = {
      dishes: [
        {name: 'Pad-Thai'}
      ],
      title: 'Extravagant Party Larty'
    }

    const expectedState = {
      dishes: [
        {name: 'Pad-Thai'},
        {name: 'KFC'}
      ],
      title: 'Extravagant Party Larty'
    }

    const actualState = reducer(initialState, {
      type: 'session/ADD_DISH',
      payload: {name: 'KFC'}
    })

    expect(actualState).toEqual(expectedState)
  })
})
