import reducer from './home';
import expect from 'expect';

describe('Home Reducer', () => {
  it('should handle ADD_SESSION', () => {
    const initialState = {
      recentSessions: [],
    }

    const expectedState = {
      recentSessions: [
        {title: 'Big Party', id: '2'}
      ]
    }

    const actualState = reducer(initialState, {
      type: 'home/ADD_SESSION',
      payload: {title: 'Big Party', id: '2'}
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
      type: 'home/TOGGLE_CREATING_SESSION'
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
      type: 'home/SET_NEW_SESSION_INPUT',
      payload: 'Ooglie Googlie'
    })

    expect(actualState).toEqual(expectedState)
  })

  it('can change restauraunt input', () => {
    const initialState = {
      restaurauntInput: '',
    }

    const expectedState = {
      restaurauntInput: 'Ooglie Googlie'
    }

    const actualState = reducer(initialState, {
      type: 'home/SET_RESTAURAUNT_INPUT',
      payload: 'Ooglie Googlie'
    })

    expect(actualState).toEqual(expectedState)
  })

  it('can change restauraunt suggestions', () => {
    const initialState = {
      restaurauntSuggestions: [],
    }

    const expectedState = {
      restaurauntSuggestions: ['Cha']
    }

    const actualState = reducer(initialState, {
      type: 'home/SET_RESTAURAUNT_SUGGESTIONS',
      payload: ['Cha']
    })

    expect(actualState).toEqual(expectedState)
  })
})