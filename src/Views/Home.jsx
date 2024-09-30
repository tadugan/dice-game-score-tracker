import { useState } from 'react'
import DiceRoller from '../Components/DiceRoller'
import NumberRows from '../Components/NumberRows'
import PenaltyBoxes from '../Components/PenaltyBoxes'
import ScoreBoxes from '../Components/ScoreBoxes'
import './Home.css'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function Home({dispatch, state}) {

  const [displayScore, setDisplayScore] = useState(false)

  const classNamesScore = classNames({
    'hide': !displayScore
  })

  const classNamesDice = classNames({
    'hide': displayScore
  })

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
        <div className={classNamesScore}>
          <ScoreBoxes state={state}></ScoreBoxes>
        </div>
        <div className={classNamesDice}>
          <DiceRoller></DiceRoller> 
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object
}

export default Home
