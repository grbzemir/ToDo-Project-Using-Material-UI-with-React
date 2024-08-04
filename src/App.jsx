import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import CreateTask from './CreateTask'

function App() {

  const addTask = (newTask) => {
    console.log(newTask)
  }

  return (
    <div className="App">
      <Header />
      <CreateTask onAdd={addTask} />
    </div>
  )
}

export default App
