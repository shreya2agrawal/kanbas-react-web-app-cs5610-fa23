import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return(
    <div>
        <h2> Count : {count } </h2>
        <button onClick={increment } className="btn btn-primary">
            Increase the count by 1
        </button>
        <br/>
        <br/>
        <button onClick={decrement } className="btn btn-primary">
            Decrease the count by 1
        </button>
    </div>
  );
}

export default Counter;
