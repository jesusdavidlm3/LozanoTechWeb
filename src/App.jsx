import { useState } from 'react'
import NavBar from './components/NavBar'
import Page from './components/Page'
import './style.scss'

function App() {

  const [display, setDisplay] = useState('start')

  return (
    <div className='container'>
      <NavBar
        onClickLogin={ () => setDisplay('log') }
        onClickCheck={ () => setDisplay('check')}
        onClickStart={ () => setDisplay('start')}
        onClickServices={ () => setDisplay('services')}
        onClickAboutUs={ () => setDisplay('aboutUs')}
        onClickComments={ () => setDisplay('comments')}
      />
      <Page display={display}/>
    </div>
  )
}

export default App
