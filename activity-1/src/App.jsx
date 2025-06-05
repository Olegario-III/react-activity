import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('Gary')
  const [showName, setShowName] = useState(true)

  return (
    <>
      <button onClick={()=> setShowName(!showName)}>
        {showName ? 'Hide Name' : 'Show Name'}
      </button>
      {showName && (
        <>
      <h1>Hello, {name}!</h1>
      <input
      type="text"
      value={name}
      onChange={e=> setName(e.target.value)} />
      <p>characters: {name.length}</p>
      </>
      )}
    </>
  )
}

export default App
