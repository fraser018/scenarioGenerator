// import createDataContext from './createDataContext'
// import axios from '../api/axios'
// // import jsonServer from '../api/jsonServer'

// const industryReducer = (state, action) => {
//   switch (action.type) {
//     case 'add_action':
//       return { ...state, toDos: action.payload }
//     case 'change_action_number':
//       return number++
//     default:
//       return state
//   }
// }

// const getIndustryList = dispatch => {
//   return async () => {
//     const resIndustry = await axios
//       .get('http://localhost:3000/industry')
//       // response.data === [{}, {}, {}]
//       .then(response => {
//         console.log(response.data)
//       })
//     dispatch({ type: 'get_industrylist', payload: response.data })
//     {
//       // console.log(response.data)
//     }
//   }
// }

// const addAction = () => {
//   return async (name, action, callback) => {
//     await axios.post('/actions', { name, action })
//     console.log(axios.post)

//     dispatch({ type: 'add_action', payload: { name, action } })
//     console.log(action.payload)
//     if (callback) {
//       callback()
//     }
//   }
// }

// const addAction = dispatch => toDo => {
//   console.log(toDo)

//   dispatch({ type: 'add_action', payload: { toDo } })
// }

// const changeActionNumber = dispatch => number => {
//   dispatch({ type: 'change_action_number', payload: { number } })
// }
// const editScenario = dispatch => {
//   return async (id, title, content, callback) => {
//     await jsonServer.put(`/blogposts/${id}`, { title, content })
//     dispatch({ type: 'edit_blogpost', payload: { id, title, content } })
//     if (callback) {
//       callback()
//     }
//   }
// }

// export const { Context, Provider } = createDataContext(
//   industryReducer,
//   { addAction, changeActionNumber },
//   { name: '', toDos: '' }
// )
