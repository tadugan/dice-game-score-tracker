import { PropTypes } from 'prop-types'
import './NumberRows.css'
import { ACTIONS } from '../App'
import classNames from 'classnames'

function NumberRows({numberData, dispatch}) {

  const boxes = createBoxElementsArray(numberData);
  const displayElements = boxes.map(colorRow => {
    return <div key={colorRow.id} className='number-row'>{colorRow.contents}</div>
  })

  function createBoxElementsArray(stateObj) {
    const boxColors = ['red', 'yellow', 'green', 'blue']
    let elementsArray = []

    for (let color of boxColors) {
      const boxArray = stateObj[color].map(box => {
        const boxClass = classNames({
          'box': true,
          'box-red': box.color === 'red',
          'box-yellow': box.color === 'yellow',
          'box-green': box.color === 'green',
          'box-blue': box.color === 'blue',
          'box-scored': box.scored === true,
          'box-disabled': box.disabled === true
        })
    
        if (box.scored === true) {
          return <p key={box.id} className={boxClass} onClick={() => handleClick(box)}>X</p>
        }
        return <p key={box.id} className={boxClass} onClick={() => handleClick(box)}>{box.number}</p>
      })

      elementsArray.push({id: color, contents: boxArray})
    }
    
    return elementsArray
  }

  function handleClick(box) {
    if (box.disabled === true) {
      toggleDisabled(box) 
    }
    else {
      toggleStatus(box)
    }
  }

  function toggleStatus(box) {
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
  numberData: PropTypes.object,
}

export default NumberRows
