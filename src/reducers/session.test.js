import reducer from './session';
import expect from 'expect';

describe('session reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      dishInput: '',
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
        {name: 'KFC'},
        {name: 'Pad-Thai'}
      ],
      title: 'Extravagant Party Larty'
    }

    const actualState = reducer(initialState, {
      type: 'session/ADD_DISH',
      payload: {name: 'KFC'}
    })

    expect(actualState).toEqual(expectedState)
  })

  it('should handle ADD_SESSION', () => {
    const initialState = {
      dishes: [],
      title: ''
    }

    const expectedState = {
      dishes: [
        {name: 'Pad-Thai'},
        {name: 'KFC'}
      ],
      title: 'Extravagant Party Larty'
    }

    const actualState = reducer(initialState, {
      type: 'session/ADD_SESSION',
      payload: {
        dishes: [
          {name: 'Pad-Thai'},
          {name: 'KFC'},
        ],
        title: 'Extravagant Party Larty'
      }
    })

    expect(actualState).toEqual(expectedState)
  })

  it('should handle SET_DISH_INPUT', () => {
    const initialState = {
      dishInput: '',
      dishes: [{name: 'KFC'}]
    }

    const expectedState = {
      dishInput: 'Poutine',
      dishes: [{name: 'KFC'}]
    }

    const actualState = reducer(initialState, {
      type: 'session/SET_DISH_INPUT',
      payload: 'Poutine'
    })

    expect(actualState).toEqual(expectedState)
  })
})
