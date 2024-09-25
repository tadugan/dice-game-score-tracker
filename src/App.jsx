import { useReducer } from 'react'
import './App.css'
import Home from './Views/Home.jsx'
import { createInitialStateObject } from './app.utils.js'

export const ACTIONS = {
  TOGGLE_STATUS: 'toggleStatus',
  TOGGLE_DISABLED: 'toggleDisabled',
  TOGGLE_PENALTY: 'togglePenalty'
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
          else if ( disableRowColorCompare(num.color, num.value, action.payload.box.value) && num.scored !== true) {
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
    case ACTIONS.TOGGLE_PENALTY:
      return {
        ...state,
        penalty: state.penalty.map(penaltyBox => {
          if (penaltyBox.id === action.payload.id) {
            return {...penaltyBox, isChecked: !penaltyBox.isChecked}
          }
          else {
            return penaltyBox
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
