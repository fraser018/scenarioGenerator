import createDataContext from './createDataContext'
import axios from '../api/axios'

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

const addActionToScenario = dispatch => ({ item }) => {
  dispatch({ type: 'add_action', payload: { item } })
}
// console.log(state)

const fetchScenarios = dispatch => async () => {
  const response = await axios.get('/actions')
  dispatch({ type: 'fetch_actions', payload: response.data })
  // console.log('fetch - ', response.data)
}

const createScenario = dispatch => async (name, actions) => {
  await axios.post('/actions', { name, actions })
}

export const { Provider, Context } = createDataContext(
  scenarioReducer,
  {
    fetchScenarios,
    createScenario,
    addActionToScenario
  },
  []
)
