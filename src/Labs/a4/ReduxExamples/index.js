import React from "react";
import HelloRedux from "./HelloWorldRedux/HelloRedux";
import Counter1 from "./CounterReduxClass/Counter1";
import Counter2 from "./CounterReduxClass/Counter2";
import Add from "./AddRedux/index"
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return (
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <Counter1 /> <br />
      <Counter2 /> <br />
      <Add /> <br />
      <TodoList /> <br />
    </div>
  );
};

export default ReduxExamples;
