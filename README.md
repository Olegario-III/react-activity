# React Name Toggle App

A simple React component that lets you toggle the visibility of a personalized greeting, edit the name in real time, and see the character count.

## Features

- Toggle name section on/off with a button
- Live name editing via controlled input
- Dynamic character counter
- Conditional rendering with React state

## Code

```jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('Gary')
  const [showName, setShowName] = useState(true)

  return (
    <>
      <button onClick={() => setShowName(!showName)}>
        {showName ? 'Hide Name' : 'Show Name'}
      </button>

      {showName && (
        <>
          <h1>Hello, {name}!</h1>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <p>characters: {name.length}</p>
        </>
      )}
    </>
  )
}

export default App
