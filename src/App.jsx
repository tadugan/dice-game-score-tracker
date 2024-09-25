import { useReducer } from 'react'
import './App.css'
import Home from './Views/Home.jsx'
import { createInitialStateObject } from './app.utils.js'

export const ACTIONS = {
  TOGGLE_STATUS: 'toggleStatus',
}

const initialState = createInitialStateObject()



function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_STATUS:
      return {
        ...state,
        [action.payload.color]: state[action.payload.color].map(num => {
          if (num.id == action.payload.id) {
            return { ...num, scored: !num.scored}
          }
          else {
            return num
          }
        })
      }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <Home dispatch={dispatch} state={state}></Home>
    </>
  )
}

export default App
