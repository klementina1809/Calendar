import { useState } from 'react'

import Month from './components/Month'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Month firstDay={2} days={29}/>
    </>
  )
}

export default App
