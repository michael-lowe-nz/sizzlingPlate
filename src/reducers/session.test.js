import reducer from './session';
import expect from 'expect';

describe('session reducer', () => {
  it('should handle ADD_DISH', () => {
    const initialState = {
      dishes: [
        {name: 'Pad-Thai', id: '2'}
      ],
      title: 'Extravagant Party Larty'
    }

    const expectedState = {
      dishes: [
        {name: 'Pad-Thai', id: '2'},
        {name: 'KFC', id: '1'},
      ],
      title: 'Extravagant Party Larty'
    }

    const actualState = reducer(initialState, {
      type: 'session/ADD_DISH',
      payload: {name: 'KFC', id: '1'}
    })

    expect(actualState).toEqual(expectedState)
  })

  it('should handle REMOVE_DISH', () => {
    const initialState = {
      dishes: [
        {name: 'Pad-Thai', id: '2'},
        {name: 'KFC', id: '1'},
      ],
      title: 'Extravagant Party Larty'
    }

    const expectedState = {
      dishes: [
        {name: 'KFC', id: '1'},
      ],
      title: 'Extravagant Party Larty'
    }

    const actualState = reducer(initialState, {
      type: 'session/REMOVE_DISH',
      payload: '2'
    })
    expect(actualState).toEqual(expectedState)
  })

  it('should handle ADD_SESSION', () => {
    const initialState = {
      dishes: [],
      title: ''
    }

    const expectedState = {
      dishes: [],
      title: 'Extravagant Party Larty'
    }

    const actualState = reducer(initialState, {
      type: 'session/ADD_SESSION',
      payload: {
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

  it('can add a vote for a dish', () => {
    const initialState = {
      dishes: [
        {
          name: 'KFC',
          votes: []
        }
      ]
    }

    const expectedState = {
      dishes: [
        {
          name: 'KFC',
          votes: [
            {user: 'T-Dawg', value: -1}
          ]
        }
      ]
    }

    const actualState = reducer(initialState, {
      type: 'session/ADD_DISH_VOTE',
      payload: {dishName: 'KFC', vote: {user: 'T-Dawg', value: -1}}
    })

    expect(actualState).toEqual(expectedState)
  })

  it('can toggle session loading state', () => {
    const initialState = {
      isLoading: false,
    }

    const expectedState = {
      isLoading: true
    }

    const actualState = reducer(initialState, {
      type: 'session/TOGGLE_SESSION_LOADING'
    })

    expect(actualState).toEqual(expectedState)
  })

  it('can change creating session to loading', () => {
    const initialState = {
      isCreatingSession: false,
    }

    const expectedState = {
      isCreatingSession: true
    }

    const actualState = reducer(initialState, {
      type: 'session/TOGGLE_CREATING_SESSION'
    })

    expect(actualState).toEqual(expectedState)
  })

  it('can change new session input', () => {
    const initialState = {
      newSessionInput: '',
    }

    const expectedState = {
      newSessionInput: 'Ooglie Googlie'
    }

    const actualState = reducer(initialState, {
      type: 'session/SET_NEW_SESSION_INPUT',
      payload: 'Ooglie Googlie'
    })

    expect(actualState).toEqual(expectedState)
  })


})
