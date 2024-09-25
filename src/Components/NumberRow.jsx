/* eslint-disable react/prop-types */
import { PropTypes } from 'prop-types'
import './NumberRow.css'
import { ACTIONS } from '../App'

// eslint-disable-next-line react/prop-types
function NumberRow({numberData, dispatch}) {

  const boxes = numberData.map(box => {
    return <p key={box.id} className='box' onClick={() => onClick(box.id)}>{box.number}</p>
  })

  function onClick(id) {
    console.log('CLICK', id)
  }

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT })
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT })
  }

  return (
    <>
      <div className='number-row-container'>
        {boxes}
      </div>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </>
  )
}

NumberRow.propTypes = {
  dispatch: PropTypes.func,
  numberData: PropTypes.array
}

export default NumberRow
