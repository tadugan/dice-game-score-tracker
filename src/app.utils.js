export function createInitialStateObject() {
  return {
    red: createNumberBoxArray('red'),
    yellow: createNumberBoxArray('yellow'),
    green: createNumberBoxArray('green'),
    blue: createNumberBoxArray('blue'),
    penalty: [
      {id: 1, isChecked: false},
      {id: 2, isChecked: false},
      {id: 3, isChecked: false},
      {id: 4, isChecked: false},
    ]
  }
}

function createNumberBoxArray(colorString) {
  let numArray = []

  for (let i=2; i<13; i++) {
    numArray.push({
      value: i,
      color: colorString,
      id: colorString + i.toString(),
      scored: false,
      disabled: false,
      isAscending: colorString === 'red' || colorString === 'yellow' ? true : false
    })
  }
  
  if (colorString === 'green' || colorString === 'blue') {
    numArray.reverse();
  }

  numArray.push({
    value: 'L',
    color: colorString,
    id: colorString + 'Lock',
    scored: false,
    disabled: false
  })

  return numArray;
}

export function isRightmostNumber(box) {
  if ((box.isAscending && box.value === 12) || (!box.isAscending && box.value === 2)) {
    return true
  }
  else {
    return false
  }
}

export function countCompletedForColor(boxArray) {
  return boxArray.filter((box) => box.scored === true).length
}

export function countPenalties(penaltyArray) {
  return penaltyArray.filter((penaltyBox) => penaltyBox.isChecked === true).length
}

export const scoreValueArray = [null, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78]

export const penaltyValueArray = [null, 5, 10, 15, 20]