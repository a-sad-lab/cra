import React, {useState, useEffect, useCallback} from 'react'
import useCmp from '../hook/use-cmp'

function C1(props) {
  const [date, setDate] = useState(Date())
  const des = useCmp('C1')

  useEffect(function() {
    document.title = 'special title'
    console.log('use effect')
    return function() {
      document.title = 'normal title'
    }
  }, [])

  const m = useCallback(function(a) {
    console.log(a)
  }, [])

  function changeDate(evt) {
    // console.log(evt.nativeEvent)
    setDate(Date())
    m('a')
  }

  return (
    <div>
      <h2>{des}</h2>
      <p>{date}</p>
      <button onClick={changeDate}>change date</button>
      <pre>{props.data}</pre>
    </div>
  )
}

export default C1
