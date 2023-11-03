import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment1, decrement1 } from "./Counter1Reducer";
import Counter2 from "./Counter2";

function Counter1() {
  // const [count, setCount] = useState(0);
  // const increment = () => setCount(count + 1);
  // const decrement = () => setCount(count - 1);
  // REPLACE ABOVE LINES

  const { count1 } = useSelector((state) => state.Counter1Reducer);
  const { count2 } = useSelector((state) => state.Counter2Reducer);
  const dispatch = useDispatch();

  return (
    <div>
      <div> Counter 1 </div>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(increment1())}
      >
        {" "}
        Increment1{" "}
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(decrement1())}
      >
        {" "}
        Decrement1{" "}
      </button>
      <h3>{count1}</h3>
      <h3> Counter 2 from first counter </h3>
      <h3>{count2}</h3>
    </div>
  );
}

export default Counter1;
