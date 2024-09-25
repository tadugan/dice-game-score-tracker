import NumberRows from '../Components/NumberRows'
import './Home.css'
import PropTypes from 'prop-types'

function Home({dispatch, state}) {

  const numberData = state
  return (
    <>
      <NumberRows numberData={numberData} dispatch={dispatch} state={state}></NumberRows>
    </>
  )
}

Home.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object
}

export default Home
