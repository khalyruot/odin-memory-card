import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FetchData from './FetchData'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <div id="top">
          <div><h1>Memory Game</h1></div>
          <div>
            <h2>Score</h2>
            <h2>Top Score</h2>
          </div>
        </div>
        <div id="body"><FetchData /></div>
      </div>
    </>
  )
}

export default App
