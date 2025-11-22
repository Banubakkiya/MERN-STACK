import {useState} from 'react';
import React from 'react';
const Counter = ()=> {
let [count,setCount] = useState(0);
   
     return (
        <div>
           <h1>states</h1>
           <p>{count}</p>
           <button onClick={() => setCount((prev)=>prev+1)}>Increase</button>
           <button onClick={() => setCount((prev)=>prev-1)}>Decrease</button>
        </div>
     );
}

export default Counter;
