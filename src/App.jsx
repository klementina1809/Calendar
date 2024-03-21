import { useState } from 'react'

import Month from './components/Month'
import Year from './components/Year'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Year isLeap={true} firstDay={1} year={2023}/>
      
    </>
  )
}

export default App
