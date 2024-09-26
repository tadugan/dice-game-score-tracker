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