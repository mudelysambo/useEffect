import react, { useState, useEffect } from "react"


function HookCounterOne() {

  const [ count, setCount ] = useState(0)

  useEffect(() => {
    document.title = 'you clicked ${count} times' 
  })



  return(
    <div>
      <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
    </div>
  )
}
export default HookCounterOne;