import { useState } from 'react'
import Day from './components/Day'
import Week from './components/Week'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Week firstDay={2} firstNumber={11}/>
    </>
  )
}

export default App
