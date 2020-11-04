import {forwardRef} from 'react'

const Ref = forwardRef(function(uselessProps, ref) {
  console.log('ref')
  return (
    <>
      <pre>forward ref</pre>
      <p><input ref={ref} placeholder='some text!' /></p>
    </>
  )
})

export default Ref
