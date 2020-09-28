import React from 'react'
// import Home from './cmp/home'
// import About from './cmp/about'
import loadable from '@loadable/component'
import {
  Switch,
  Route
} from 'react-router-dom'

function OMG() {
  return (
    <pre>o m g</pre>
  )
}

const Home = loadable(() => import(/* webpackChunkName: "home" */ './cmp/home'), {
  fallback: <div>HOME LOADING......</div>
})
const About = loadable(() => import(/* webpackChunkName: "about" */ './cmp/about').catch(function(err) {
  console.log({err})
  return OMG
}), {
  fallback: <div>ABOUT LOADING......</div>
})

function Routers() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default Routers
