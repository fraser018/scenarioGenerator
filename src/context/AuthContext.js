import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import axios from '../api/axios'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'signin':
      return { errorMessage: '', token: action.payload }
    case 'clear_error_message':
      return { ...state, errorMessage: '' }
    case 'signout':
      return { token: null, errorMessage: '' }
    default:
      return state
  }
}

//check localstorage for token to auto signin
const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  console.log(token)

  if (token) {
    dispatch({ type: 'signin', payload: token })
    navigate('Scenarios')
  } else {
    navigate('SignUp')
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

const signup = dispatch => {
  return async ({ email, password, company }) => {
    // make api request to sign up
    // if sign up, modify our state, say authenticated
    // if sign up fails, error message
    try {
      const response = await axios.post('/signup', { email, password, company })
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({ type: 'signin', payload: response.data.token })
      navigate('Scenarios')
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong!' })
    }
  }
}

const signin = dispatch => {
  return async ({ email, password }) => {
    // try to sign in
    // handle sign in, update state
    //handle failure, error message
    try {
      const response = await axios.post('/signin', { email, password })
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({ type: 'signin', payload: response.data.token })
      navigate('Scenarios')
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong signing in'
      })
    }
  }
}

const signout = dispatch => {
  return async () => {
    // sign out, update state
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'signout' })
    navigate('Intro')
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
)
// <NavigationEvents onWillFocus={clearErrorMessage}
