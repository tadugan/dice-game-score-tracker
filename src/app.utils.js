export function createInitialStateObject() {
  return {
    red: createNumberBoxArray('red'),
    yellow: createNumberBoxArray('yellow'),
    green: createNumberBoxArray('green'),
    blue: createNumberBoxArray('blue')
  }
}

function createNumberBoxArray(colorString) {
  let numArray = []

  for (let i=2; i<13; i++) {
    numArray.push({
      number: i,
      color: colorString,
      id: colorString + i.toString(),
      scored: false,
      disabled: false
    })
  }
  
  if (colorString === 'green' || colorString === 'blue') {
    numArray.reverse();
  }

  return numArray;
}