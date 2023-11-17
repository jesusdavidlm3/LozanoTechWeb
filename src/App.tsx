import { useState } from 'react'
import NavBar from './components/NavBar'
import Page from './components/Page'
import './style.scss'

function App() {

  const [display, setDisplay] = useState('start')

  return (
    <div className='container'>
      <NavBar/>
      <Page/>
    </div>
  )
}

export default App
