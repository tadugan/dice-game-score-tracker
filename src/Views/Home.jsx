import { useState } from 'react'
import DiceRoller from '../Components/DiceRoller'
import NumberRows from '../Components/NumberRows'
import PenaltyBoxes from '../Components/PenaltyBoxes'
import ScoreBoxes from '../Components/ScoreBoxes'
import './Home.css'
import PropTypes from 'prop-types'

function Home({dispatch, state}) {

  const [displayScore, setDisplayScore] = useState(false)

  function toggleScore() {
    setDisplayScore(!displayScore)
  }

  return (
    <>
      <NumberRows state={state} dispatch={dispatch}></NumberRows>
      <PenaltyBoxes state={state} dispatch={dispatch}></PenaltyBoxes>
      <button onClick={() => toggleScore()}>
      {
        displayScore ? 
        'Switch to Dice Roller'
        :
        'Switch to Score' 
      }
      </button>
      {
        displayScore ? 
        <ScoreBoxes state={state}></ScoreBoxes> 
        : 
        <DiceRoller></DiceRoller>
      }

    </>
  )
}

Home.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object
}

export default Home
