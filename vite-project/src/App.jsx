import { useState } from 'react'
import viteLogo from '/vite.svg'
import Sim from './sim.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    //<h1> hello namaste react</h1>
    <>
    <Sim/>
    <h1> learning react</h1>
    <p>this is paragraph</p>
    </>
    

  )
}

export default App
