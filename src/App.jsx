import { useReducer } from 'react'
import './App.css'
import Home from './Views/Home.jsx'
import { createInitialStateObject, isRightmostNumber } from './app.utils.js'

export const ACTIONS = {
  TOGGLE_STATUS: 'toggleStatus',
  TOGGLE_DISABLED: 'toggleDisabled',
  TOGGLE_PENALTY: 'togglePenalty',
  LOCK_ROW: 'lockRow',
  UNLOCK_ROW: 'unlockRow'
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
          else if (isRightmostNumber(action.payload.box) && num.value === 'L') {
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
    case ACTIONS.LOCK_ROW:
      return {
        ...state,
        [action.payload.box.color]: state[action.payload.box.color].map(num => {
          if (!num.scored) {
            return {...num, disabled: true}
          }
          else {
            return num
          }
        })
      }
    case ACTIONS.UNLOCK_ROW:
      return {
        ...state,
        [action.payload.box.color]: state[action.payload.box.color].map(num => {
          if (unlockRowColorCompare(state[action.payload.box.color], num)) {
            console.log('compare value', num.value)
            return {...num, disabled: false}
          }
          else if (num.value === 'L') {
            return {...num, disabled: false}
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

function unlockRowColorCompare(numberArray, valueToCompare) {
  let lastVal;
  if (valueToCompare.color === 'red' || valueToCompare.color === 'yellow') {
    lastVal = numberArray.findLast(n => n.scored) || {value: 0}
    return valueToCompare.value > lastVal.value
  }
  else {
    lastVal = numberArray.findLast(n => n.scored) || {value: 13}
    return valueToCompare.value < lastVal.value
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
