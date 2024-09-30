import { PropTypes } from 'prop-types'
import './NumberRows.css'
import { ACTIONS } from '../App'
import classNames from 'classnames'
import LockIcon from './Icons/LockIcon';
import { countCompletedForColor, isRightmostNumber } from '../app.utils';

function NumberRows({state, dispatch}) {

  const boxes = createBoxElementsArray(state);
  const displayElements = boxes.map(colorRow => {
    return <div key={colorRow.id} className='number-row'>{colorRow.contents}</div>
  })

  function createBoxElementsArray(stateObj) {
    const boxColors = ['red', 'yellow', 'green', 'blue']
    let elementsArray = []

    for (let color of boxColors) {
      const boxArray = stateObj[color].map(box => {

        const isLockBox = box.value === 'L'

        const boxClass = classNames({
          'box': true,
          'box-red': box.color === 'red',
          'box-yellow': box.color === 'yellow',
          'box-green': box.color === 'green',
          'box-blue': box.color === 'blue',
          'box-scored': box.scored,
          'box-disabled': box.disabled,
          'box-lock': isLockBox
        })
    
        if (box.scored === true) {
          return <p key={box.id} className={boxClass} onClick={() => handleClick(box)}>X</p>
        }
        return <p key={box.id} className={boxClass} onClick={() => handleClick(box)}>{isLockBox ? <LockIcon></LockIcon> : box.value}</p>
      })

      elementsArray.push({id: color, contents: boxArray})
    }
    
    return elementsArray
  }

  function handleClick(box) {
    if (box.value === 'L' && box.disabled === false) {
      lockRow(box)
    }
    else if (box.value === 'L' && box.disabled === true) {
      unlockRow(box)
    }
    else if (box.disabled === true) {
      toggleDisabled(box) 
    }
    else {
      toggleStatus(box)
    }
  }

  function lockRow(box) {
    dispatch({ type: ACTIONS.LOCK_ROW, payload: { box: box }})
  }

  function unlockRow(box) {
    dispatch({ type: ACTIONS.UNLOCK_ROW, payload: { box: box }})
  }

  function toggleStatus(box) {
    if (box.value === 'L') return
    if (isRightmostNumber(box) && countCompletedForColor(state[box.color]) < 5) {
      return
    }
    dispatch({ type: ACTIONS.TOGGLE_STATUS, payload: { box: box }})
  }

  function toggleDisabled(box) {
    dispatch({ type: ACTIONS.TOGGLE_DISABLED, payload: { box: box }})
  }

  return (
    <>
      <div className='number-row-container'>
        {displayElements}
      </div>
    </>
  )
}

NumberRows.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
}

export default NumberRows
