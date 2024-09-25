import { useReducer } from 'react'
import './App.css'
import Home from './Views/Home.jsx'

export const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1}
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }

}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <>
      <p> { state.count }</p>
      <Home dispatch={dispatch}></Home>
    </>
  )
}

export default App
