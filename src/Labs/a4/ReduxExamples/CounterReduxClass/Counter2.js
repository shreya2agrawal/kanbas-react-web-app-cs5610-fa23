import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment2, decrement2 } from "./Counter2Reducer";
import Counter1 from "./Counter1";

function Counter2() {
  // const [count2, setCount2] = useState(0);
  // const increment2 = () => setCount2(count2 + 1);
  // const decrement2 = () => setCount2(count2 - 1);
  const { count2 } = useSelector((state) => state.Counter2Reducer);
  const dispatch = useDispatch();
  return (
    <div>
      <div> Counter 2 </div>
      <button className="btn btn-info" onClick={() => dispatch(increment2())}>
        {" "}
        Increment2{" "}
      </button>
      <button className="btn btn-info" onClick={() => dispatch(decrement2())}>
        {" "}
        Decrement2{" "}
      </button>
      <h2> {count2} </h2>
      <h3> Counter 1 from second counter </h3>
      <Counter1 />
    </div>
  );
}

export default Counter2;
