import reducer from './session';
import expect from 'expect';

describe('Home Reducer', () => {
  it('should handle ADD_SESSION', () => {
    const initialState = {
      recentSessions: [],
    }

    const expectedState = {
      recentSessions: [
        {name: 'Big Party', id: '2'}
      ]
    }

    const actualState = reducer(initialState, {
      type: 'session/ADD_DISH',
      payload: {name: 'Big Party', id: '2'}
    })

    expect(actualState).toEqual(expectedState)
  })
})