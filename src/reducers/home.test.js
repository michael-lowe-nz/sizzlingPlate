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

  it('can change restaurant input', () => {
    const initialState = {
      restaurantInput: '',
    }

    const expectedState = {
      restaurantInput: 'Ooglie Googlie'
    }

    const actualState = reducer(initialState, {
      type: 'home/SET_RESTAURANT_INPUT',
      payload: 'Ooglie Googlie'
    })

    expect(actualState).toEqual(expectedState)
  })


  it('can change restaurant suggestions', () => {
    const initialState = {
      restaurantSuggestions: [],
    }

    const expectedState = {
      restaurantSuggestions: ['Cha']
    }

    const actualState = reducer(initialState, {
      type: 'home/ADD_RESTAURANT_SUGGESTIONS',
      payload: 'Cha'
    })

    expect(actualState).toEqual(expectedState)
  })

  it('can change restaurant suggestions loading', () => {
    const initialState = {
      restaurantLoading: false,
    }

    const expectedState = {
      restaurantLoading: true
    }

    const actualState = reducer(initialState, {
      type: 'home/TOGGLE_RESTAURANT_LOADING'
    })

    expect(actualState).toEqual(expectedState)
  })
})