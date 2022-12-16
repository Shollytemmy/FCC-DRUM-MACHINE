import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { DrumPads } from './Components/DrumPads'
import { Display } from './Components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <DrumPads />
      <Display />
    </div>
  )
}

export default App
