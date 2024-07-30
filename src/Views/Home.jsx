import NumberRow from '../Components/NumberRow'
import './Home.css'

const numberData = [
  {
    number: '2',
    color: 'red',
    id: 'red2'
  },
  {
    number: '3',
    color: 'red',
    id: 'red3'
  },
  {
    number: '4',
    color: 'red',
    id: 'red4'
  },
]

function Home() {

  return (
    <>
      <NumberRow numberData={numberData}></NumberRow>
    </>
  )
}

export default Home
