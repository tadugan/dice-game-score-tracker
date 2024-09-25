/* eslint-disable react/prop-types */
import { PropTypes } from 'prop-types'
import './NumberRows.css'
import { ACTIONS } from '../App'
import classNames from 'classnames'
// import { ACTIONS } from '../App'

// eslint-disable-next-line react/prop-types
function NumberRows({numberData, dispatch}) {

  const boxes = numberData.map(box => {
    const boxClass = classNames({
      'box': true,
      'box-red': box.color === 'red',
      'box-yellow': box.color === 'yellow',
      'box-green': box.color === 'green',
      'box-blue': box.color === 'blue',
      'box-scored': box.scored === true,
      'box-disabled': true
      // 'box-disabled': box.disabled === true
    })

    return <p key={box.id} className={boxClass} onClick={() => toggleStatus(box.id, box.color)}>{box.number}</p>
  })

  function toggleStatus(boxId, boxColor) {
    console.log('click')
    dispatch({ type: ACTIONS.TOGGLE_STATUS, payload: { id: boxId, color: boxColor }})
  }

  return (
    <>
      <div className='number-row-container'>
        {boxes}
      </div>
    </>
  )
}

NumberRows.propTypes = {
  dispatch: PropTypes.func,
  numberData: PropTypes.array,
}

export default NumberRows
