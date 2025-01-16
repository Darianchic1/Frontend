import React from 'react'
import '../src/App.css'
import TodoPage from './Pages/TodoPage'
import Header from './components/Header'
import Sidebar from './components/SideBar'

function App() {

  return (
    <div>
      <Header />
      <Sidebar/>
      <TodoPage/>
    </div>
  )
}

export default App
