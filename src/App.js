import {useState} from 'react'
import {
  BrowserRouter,
  Link
} from 'react-router-dom'
import Routers from './routers'
import C1 from './cmp/c1'
import C2 from './cmp/c2'

import style from './App.module.css'

function App() {
  console.log('app')
  const [flag, setFlag] = useState(true)

  function toggle() {
    setFlag(!flag)
  }

  let cmp = <C1 data='C1 cmp' />

  if(!flag) {
    cmp = null
  }

  return (
    <BrowserRouter>
      <header className={style.app}>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/ref">Ref</Link>
          </li>
          <li>
            <Link to="/hoc-ref">Hoc Ref</Link>
          </li>
        </ol>
        {cmp}
        <C2 data='C2 cmp' />
        <button onClick={toggle}>toggle</button>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <hr />
      <Routers />
    </BrowserRouter>
    
  )
}

export default App;
