import { useState } from 'react'
import NavBar from './components/NavBar'
import Page from './components/Page'
import './style.scss'

function App() {

  const [display, setDisplay] = useState('reg')

  function setRegister(){
    setDisplay('reg')
  }

  function setLogin(){
    setDisplay('log')
  }

  function setCheck(){
    setDisplay('check')
  }

  return (
    <div className='container'>
      <NavBar onClickLogin={setLogin}/>
      <Page display={display}/>
    </div>
  )
}

export default App
