import { PropTypes } from 'prop-types'
import './PenaltyBoxes.css'
import { ACTIONS } from '../App'

function PenaltyBoxes({state, dispatch}) {

  const penaltyBoxes = state.penalty

  const displayPenaltyBoxes = penaltyBoxes.map((penaltyBox) => {
    return <p key={penaltyBox.id} className='penalty-box checked-box' onClick={() => {togglePenalty(penaltyBox.id)}}>{penaltyBox.isChecked ? 'X' : null}</p>
  })

  function togglePenalty(id) {
    dispatch({ type: ACTIONS.TOGGLE_PENALTY, payload: {id}})
  }

  return (
    <>
      <div className="penalty-box-container">
        {displayPenaltyBoxes}
      </div>
    </>
  )
}

PenaltyBoxes.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
}

export default PenaltyBoxes