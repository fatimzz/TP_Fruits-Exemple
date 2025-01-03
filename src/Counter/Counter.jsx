import { init } from "mvn/target";
import { useState } from "react"


export default function Counter(initialCount, step){

    //Hooks
    //useState()...
    const[count, setCount] = useState(initialCount);
return <div>

  <span>
il y a {count};  
</span>
<button onClick={() => setCount(count+ step)}> Increment </button>
<button onClick={() => setCount(0)}> Reset </button>
</div>

}