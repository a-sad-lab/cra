import {forwardRef} from 'react'

function Cmp(props) {
  const {forwardedRef} = props
  return (
    <>
      <pre>hoc forward ref props: {props.text} & {props.pt}</pre>
      <input ref={forwardedRef} placeholder='hoc ref some text!' />
    </>
  )
}

/* 
// 如果不需要 forwardRef
function hocCmp(Wrapped, injected) {
  return function() {
    return <Wrapped text={injected} />
  }
} 
*/

function hocCmp(Wrapped, injected) {
  return forwardRef(function(props, ref) {
    return <Wrapped {...props} forwardedRef={ref} text={injected} />
  })
}

const HocRef = hocCmp(Cmp, 'something injected')

export default HocRef
