import { useState } from 'react'
import './DiceRoller.css'
import { rollDie } from '../app.utils'
import classNames from 'classnames'
import DieOneIcon from './Icons/DieOneIcon'
import DieTwoIcon from './Icons/DieTwoIcon'
import DieThreeIcon from './Icons/DieThreeIcon'
import DieFourIcon from './Icons/DieFourIcon'
import DieFiveIcon from './Icons/DieFiveIcon'
import DieSixIcon from './Icons/DieSixIcon'
import { colorMap } from '../app.utils'

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
    // const dieClass = classNames({
    //   'die': true,
    //   'die-red': die.color === 'red',
    //   'die-yellow': die.color === 'yellow',
    //   'die-green': die.color === 'green',
    //   'die-blue': die.color === 'blue',
    //   'die-white': die.color === 'white'
    // }) 

    return displayDiceComponent(die)
    // if (die.value === 1) return <DieOneIcon color={'red'} className={dieClass} key={die.id}></DieOneIcon>
    // return <div key={die.id} className={dieClass}>{die.value}</div>
  })

  function rollDice() {
    const newResults = diceResults.map(die => {
      return {...die, value: rollDie()}
    })
    console.log(newResults)
    setDiceResults(newResults)
  }

  function displayDiceComponent(die) {
    const dieClass = classNames({
      'die': true,
      'die-red': die.color === 'red',
      'die-yellow': die.color === 'yellow',
      'die-green': die.color === 'green',
      'die-blue': die.color === 'blue',
      'die-white': die.color === 'white'
    }) 

    switch (die.value) {
      case 1:
        return <DieOneIcon color={colorMap[die.color]} className={dieClass} key={die.id}></DieOneIcon>
      case 2:
        return <DieTwoIcon color={colorMap[die.color]} className={dieClass} key={die.id}></DieTwoIcon>
      case 3:
        return <DieThreeIcon color={colorMap[die.color]} className={dieClass} key={die.id}></DieThreeIcon>
      case 4:
        return <DieFourIcon color={colorMap[die.color]} className={dieClass} key={die.id}></DieFourIcon>
      case 5:
        return <DieFiveIcon color={colorMap[die.color]} className={dieClass} key={die.id}></DieFiveIcon>
      case 6:
        return <DieSixIcon color={colorMap[die.color]} className={dieClass} key={die.id}></DieSixIcon>
      default:
        return <div key={die.id} className={dieClass}>{die.value}</div>
    }
  }

  return (
    <>
      <div className='dice-roller-container'>
        { displayDice }
        <button className='roll-dice-btn' onClick={() => rollDice()}>Roll Dice</button>
      </div>
    </>
  )
}

export default DiceRoller