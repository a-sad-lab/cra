// import Home from './cmp/home'
// import About from './cmp/about'
import loadable from '@loadable/component'
import {
  Switch,
  Route
} from 'react-router-dom'
import {A} from './cmp/a'
import {B} from './cmp/b'

const Home = loadable(() => import(/* webpackChunkName: "home" */ './cmp/home'), {
  fallback: <div>HOME LOADING......</div>
})

const About = loadable(
  () => import(/* webpackChunkName: "about" */ './cmp/about').catch(
    function(err) {
      console.log({err})
      return function OMG() {
        return (
          <pre>o m g</pre>
        )
      }
    }
  ), 
  {
    fallback: <div>ABOUT LOADING......</div>
  }
)

function Routers() {
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
      <Route path="*">
        <pre>404 not found</pre>
      </Route>
    </Switch>
  )
}

export default Routers
