import { useState, useEffect } from 'react';

function useCmp(cmpName) {  
  const [des, setDes] = useState('')

  useEffect(function() {
    const t = setTimeout(function() {
      setDes(`This is component ${cmpName || ''}`)
    }, 2000)
    return function() {
      clearTimeout(t)
    }
  }, [cmpName])

  return des
  
}

export default useCmp
