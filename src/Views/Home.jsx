import { useState } from 'react'
import DiceRoller from '../Components/DiceRoller'
import NumberRows from '../Components/NumberRows'
import PenaltyBoxes from '../Components/PenaltyBoxes'
import ScoreBoxes from '../Components/ScoreBoxes'
import './Home.css'
import PropTypes from 'prop-types'

function Home({dispatch, state}) {

  const [displayScore, setDisplayScore] = useState(false)

  const displayDiceOrScore = displayScore ? 
    <ScoreBoxes state={state}></ScoreBoxes> 
    : 
    <DiceRoller></DiceRoller>

  function toggleScore() {
    setDisplayScore(!displayScore)
  }

  return (
    <div className='home-container'>
      <NumberRows state={state} dispatch={dispatch}></NumberRows>
      <PenaltyBoxes state={state} dispatch={dispatch}></PenaltyBoxes>
      <div className='home-toggle-score-dice'>
        <button className='home-toggle-btn' onClick={() => toggleScore()}>
        {
          displayScore ?
          'Dice Roller'
          :
          'View Score'
        }
        </button>
        { displayDiceOrScore }
      </div>
    </div>
  )
}

Home.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object
}

export default Home
