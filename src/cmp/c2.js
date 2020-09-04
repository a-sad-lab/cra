import React from 'react'
import useCmp from '../hook/use-cmp'

function C2(props) {
  const des = useCmp('C2')
  return (
    <div>
      <h2>{des}</h2>
      <p>{props.data}</p>
    </div>
  )
}

export default C2
