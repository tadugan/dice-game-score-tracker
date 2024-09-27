import DiceRoller from '../Components/DiceRoller'
import NumberRows from '../Components/NumberRows'
import PenaltyBoxes from '../Components/PenaltyBoxes'
import ScoreBoxes from '../Components/ScoreBoxes'
import './Home.css'
import PropTypes from 'prop-types'

function Home({dispatch, state}) {

  return (
    <>
      <NumberRows state={state} dispatch={dispatch}></NumberRows>
      <PenaltyBoxes state={state} dispatch={dispatch}></PenaltyBoxes>
      {/* <ScoreBoxes state={state}></ScoreBoxes> */}
      <DiceRoller></DiceRoller>
    </>
  )
}

Home.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object
}

export default Home
