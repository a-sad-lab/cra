import {createRef, useEffect} from 'react'
import loadable from '@loadable/component'
import {
  Switch,
  Route
} from 'react-router-dom'
import {A} from './cmp/a'
import {B} from './cmp/b'

function Omg(props) {
  return <pre>{props.text || 'null'}</pre>
}

function Loading(props) {
  return <pre>{props.text}</pre>
}

const Home = loadable(() => import(/* webpackChunkName: "Home" */ './cmp/home'), {
  fallback: <Loading text='Home loading......' />
})

const About = loadable(
  () => import(/* webpackChunkName: "About" */ './cmp/about').catch(
    function(err) {
      console.log({err})
      return <Omg text='About omg' />
    }
  ), 
  {
    fallback: <Loading text='About loading......' />
  }
)

const Ref = loadable(
  () => import(/* webpackChunkName: "Ref" */ './cmp/ref').catch(
    function(err) {
      console.log({'ref-err': err})
      return <Omg text='Ref omg' />
    }
  ),
  {
    fallback: <Loading text='Ref loading......' />
  }
)

const HocRef = loadable(
  () => import(/* webpackChunkName: "HocRef" */ './cmp/hoc-ref').catch(
    function(err) {
      console.log({'hoc-ref-err': err})
      return <Omg text='Hoc Ref omg' />
    }
  ),
  {
    fallback: <Loading text='Hoc Ref loading......' />
  }
)


function Routers() {
  console.log('routers')

  const rrr = createRef()
  const rrrr = createRef()

  useEffect(function() {
    console.log({rrr, rrrr})
  }, [rrr, rrrr])

  function focusRefCurry(ref) {
    return function focusRef(event) {
      console.log({event, nativeEvent: event.nativeEvent})
      ref.current.focus()
    }
  }

  const focusRef = focusRefCurry(rrr)
  const focusHocRef = focusRefCurry(rrrr)

  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/">
        <Home a={<A />} b={<B />}>
          <div>货啊……这是 children</div>
        </Home>
      </Route>
      <Route path="/ref">
        <Ref ref={rrr} />
        <button onClick={focusRef}>focus</button>
      </Route>
      <Route path="/hoc-ref">
        <HocRef pt='pass through props' ref={rrrr} />
        <button onClick={focusHocRef}>focus</button>
      </Route>
      <Route path="*">
        <pre>404 not found</pre>
      </Route>
    </Switch>
  )
}

export default Routers
