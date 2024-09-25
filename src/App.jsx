import { useReducer } from 'react'
import './App.css'
import Home from './Views/Home.jsx'
import { createInitialStateObject } from './app.utils.js'

export const ACTIONS = {
  TOGGLE_STATUS: 'toggleStatus',
  TOGGLE_DISABLED: 'toggleDisabled'
}

const initialState = createInitialStateObject()

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_STATUS:
      return {
        ...state,
        [action.payload.box.color]: state[action.payload.box.color].map(num => {
          if (num.id == action.payload.box.id) {
            return { ...num, scored: !num.scored}
          }
          else if ( disableRowColorCompare(num.color, num.number, action.payload.box.number) && num.scored !== true) {
            return { ...num, disabled: true }
          }
          else {
            return num
          }
        })
      }
    case ACTIONS.TOGGLE_DISABLED:
      return {
        ...state,
        [action.payload.box.color]: state[action.payload.box.color].map(num => {
          if (num.id == action.payload.box.id && num.disabled === true) {
            return { ...num, disabled: false}
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

function disableRowColorCompare(color, number, scoredNumber) {
  if (color === 'red' || color === 'yellow') {
    return number < scoredNumber ? true : false
  }
  else {
    return number > scoredNumber ? true : false
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
