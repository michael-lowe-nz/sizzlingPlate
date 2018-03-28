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
})