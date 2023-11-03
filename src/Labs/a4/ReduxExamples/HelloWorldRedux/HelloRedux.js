import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "./helloReducer";

function HelloRedux() {
  //const [message, setMessage] = useState("Hello");
  //const [message] = useState("Hello");
  const { message } = useSelector((state) => state.helloReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Hello Redux </h2>
      <button onClick={() => dispatch(setMessage("Hello Redux from button."))}>
        Set Message
      </button>
      <h2> {message} </h2>
    </div>
  );
}

export default HelloRedux;
