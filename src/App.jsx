import { useState } from 'react'
import Day from './components/Day'
import Week from './components/Week'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Week firstDay={3} firstNumber={12}/>
    </>
  )
}

export default App
