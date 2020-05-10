import createDataContext from './createDataContext'
import axios from '../api/axios'
import { navigate } from '../navigationRef'

const scenarioReducer = (state, action) => {
  switch (action.type) {
    case 'add_action':
      return { ...state, item: action.payload }
    case 'fetch_actions':
      return action.payload
    default:
      return state
  }
}

const createScenario = dispatch => {
  return async ({ item }) => {
    try {
      const response = await axios.post('/actions', {
        action: item
      })
      console.log(response.data)
      navigate('Confirm')
    } catch (err) {
      console.log(err)
    }
  }
}

const updateCompleted = dispatch => {
  return async ({ completed }) => {
    try {
      const response = await axios.put('/actions', { completed })
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }
}

const fetchScenarios = dispatch => async () => {
  const response = await axios.get('/actions')
  dispatch({ type: 'fetch_actions', payload: response.data })
  // console.log('fetch - ', response.data)
}

const addActionToScenario = dispatch => ({ item }) => {
  console.log(item)
}

export const { Provider, Context } = createDataContext(
  scenarioReducer,
  {
    fetchScenarios,
    createScenario,
    addActionToScenario
  },
  { item: '' }
)
