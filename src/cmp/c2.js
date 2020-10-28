// import useCmp from '../hook/use-cmp'

function C2(l) {
  console.log('c2')
  // const des = useCmp('C2')
  return (
    <div>
      <h1>C2</h1>
      {/* <h2>des: {des}</h2> */}
      <pre>l.data: {l.data}</pre>
    </div>
  )
}

export default C2
