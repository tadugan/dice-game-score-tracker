import NumberRows from '../Components/NumberRows'
import PenaltyBoxes from '../Components/PenaltyBoxes'
import './Home.css'
import PropTypes from 'prop-types'

function Home({dispatch, state}) {

  return (
    <>
      <NumberRows state={state} dispatch={dispatch} state={state}></NumberRows>
      <PenaltyBoxes state={state} dispatch={dispatch}></PenaltyBoxes>
    </>
  )
}

Home.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object
}

export default Home
