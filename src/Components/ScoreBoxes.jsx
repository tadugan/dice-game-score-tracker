import { countCompletedForColor, countPenalties, penaltyValueArray, scoreValueArray } from '../app.utils'
import './ScoreBoxes.css'
import PropTypes from 'prop-types'

function ScoreBoxes({state}) {

  const redScore = scoreValueArray[countCompletedForColor(state['red'])]
  const yellowScore = scoreValueArray[countCompletedForColor(state['yellow'])]
  const greenScore = scoreValueArray[countCompletedForColor(state['green'])]
  const blueScore = scoreValueArray[countCompletedForColor(state['blue'])]
  const penalty = penaltyValueArray[countPenalties(state.penalty)]
  const totalScore = redScore + yellowScore + greenScore + blueScore - penalty

  return (
    <>
    <div className="score-box-container">
      <div className='score-box red'>{redScore}</div>
      <div className='operator'>+</div>
      <div className='score-box yellow'>{yellowScore}</div>
      <div className='operator'>+</div>
      <div className='score-box green'>{greenScore}</div>
      <div className='operator'>+</div>
      <div className='score-box blue'>{blueScore}</div>
      <div className='operator'>-</div>
      <div className='score-box penalty'>{penalty}</div>
      <div className='operator'>=</div>
      <div className='score-box total'>{totalScore}</div>
    </div>
    </>
  )
}

ScoreBoxes.propTypes = {
  state: PropTypes.object
}

export default ScoreBoxes