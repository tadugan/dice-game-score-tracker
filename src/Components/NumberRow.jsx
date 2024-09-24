/* eslint-disable react/prop-types */
import './NumberRow.css'

// eslint-disable-next-line react/prop-types
function NumberRow({numberData}) {

  const boxes = numberData.map(box => {
    return <p key={box.id} className='box' onClick={() => onClick(box.id)}>{box.number}</p>
  })

  function onClick(id) {
    console.log('CLICK', id)
  }

  return (
    <>
      <div className='number-row-container'>
        {boxes}
      </div>
    </>
  )
}

export default NumberRow
