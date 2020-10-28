import {useState, useEffect} from 'react'
// import useCmp from '../hook/use-cmp'

function C1(props) {
  console.log('c1')
  const [date, setDate] = useState(Date())
  // const des = useCmp('C1')

  useEffect(function() {
    document.title = 'c1 title'
    return function destroy() {
      document.title = 'normal title'
    }
  }, [])

  function changeDate(evt) {
    setDate(Date())
  }

  return (
    <div>
      <h1>C1</h1>
      {/* <h2>des: {des}</h2> */}
      <p>date: {date}</p>
      <button onClick={changeDate}>change date</button>
      <pre>props.data: {props.data}</pre>
    </div>
  )
}

export default C1
