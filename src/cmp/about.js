import {useEffect} from 'react'


function About() {
  console.log('about')
  useEffect(function() {
    import('./add').then(data => console.log(data.add))
  }, [])
  return (
    <div>About content</div>
  )
}

export default About
