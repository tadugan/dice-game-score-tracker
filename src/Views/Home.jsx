import NumberRow from '../Components/NumberRow'
import './Home.css'
import PropTypes from 'prop-types'

const numberData = [
  {
    number: '2',
    color: 'red',
    id: 'red2'
  },
  {
    number: '3',
    color: 'red',
    id: 'red3'
  },
  {
    number: '4',
    color: 'red',
    id: 'red4'
  },
]

function Home({dispatch}) {

  return (
    <>
      <NumberRow numberData={numberData} dispatch={dispatch}></NumberRow>
    </>
  )
}

Home.propTypes = {
  dispatch: PropTypes.func
}

export default Home
