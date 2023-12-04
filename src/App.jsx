import { useState } from 'react'
import NavBar from './components/NavBar'
import Page from './components/Page'
import './style.scss'

function App() {

  const [display, setDisplay] = useState('start')

  function setStart(){
    setDisplay('start')
  }

  function setRegister(){
    setDisplay('reg')
  }

  function setLogin(){
    setDisplay('log')
  }

  function setCheck(){
    setDisplay('check')
  }

  function setServices(){
    setDisplay('services')
  }

  function setAboutUs(){
    setDisplay('aboutUs')
  }

  function setComments(){
    setDisplay('comments')
  }

  return (
    <div className='container'>
      <NavBar
        onClickLogin={setLogin}
        onClickReg={setRegister}
        onClickCheck={setCheck}
        onClickStart={setStart}
        onClickServices={setServices}
        onClickAboutUs={setAboutUs}
        onClickComments={setComments}
      />
      <Page display={display}/>
    </div>
  )
}

export default App
