import React from 'react'
import { useState } from 'react'
const HelloWorld = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        {count}
        <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    </div>
  )
}

export default HelloWorld