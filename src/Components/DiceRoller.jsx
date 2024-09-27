import { useState } from 'react'
import './DiceRoller.css'
import { rollDie } from '../app.utils'
import classNames from 'classnames'

function DiceRoller() {

  const [diceResults, setDiceResults] = useState([
    {color: 'white', id: '1', value: null},
    {color: 'white', id: '2', value: null},
    {color: 'red', id: '3', value: null},
    {color: 'yellow', id: '4', value: null},
    {color: 'green', id: '5', value: null},
    {color: 'blue', id: '6', value: null}
  ])

  const displayDice = diceResults.map(die => {
    const dieClass = classNames({
      'die': true,
      'die-red': die.color === 'red',
      'die-yellow': die.color === 'yellow',
      'die-green': die.color === 'green',
      'die-blue': die.color === 'blue',
      'die-white': die.color === 'white'
    }) 

    return <div key={die.id} className={dieClass}>{die.value}</div>
  })

  function rollDice() {
    const newResults = diceResults.map(die => {
      return {...die, value: rollDie()}
    })
    console.log(newResults)
    setDiceResults(newResults)
  }

  return (
    <>
      <div className='dice-roller-container'>
        <button onClick={() => rollDice()}>Roll Dice</button>
        { displayDice }
        {/* {JSON.stringify(diceResults)} */}
      </div>
    </>
  )
}

export default DiceRoller