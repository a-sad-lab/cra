import {useState, useEffect} from 'react'

function Home(props) {
  console.log('home')
  const [user, setUser] = useState(null)
  useEffect(() => {
    fetch('/user')
      .then(res => res.json())
      .then(res => setUser(res.name + '/' + res.age))
  }, [])

  useEffect(function() {
    fetch('/push', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({gift: 'Here is a gift!'}),
    }).then(res => res.text()).then(res => console.log(res)).catch(err => console.log(err))
  }, [])

  return (
    <>
      <div>Home content</div>
      <pre>{user}</pre>
      {props.a}
      {props.b}
      {props.children}
    </>
  )
}

export default Home
