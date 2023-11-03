import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject.js";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ArrayStateVariableLabs from "./ArrayStateVariableLabs";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import store from "./store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";

function Assignment4() {
  function sayHello() {
    alert("Hello World for passing Function!");
  }
  const { todos } = useSelector((state) => state.todosReducer);

  return (
    <Provider store={store}>
      <div>
        <h1>Assignment - 4</h1> <br />
        <Add a={1} b={2} /> <br />
        <ClickEvent /> <br />
        <PassingDataOnEvent /> <br />
        <PassingFunctions theFunction={sayHello} /> <br />
        <Counter /> <br />
        <EventObject /> <br />
        <BooleanStateVariables /> <br />
        <StringStateVariables /> <br />
        <DateStateVariable /> <br />
        <ObjectStateVariable /> <br />
        <ArrayStateVariable /> <br />
        <ArrayStateVariableLabs /> <br />
        <ParentStateComponent /> <br />
        <hr /> <hr />
        <ReduxExamples /> <br />
        <ul className="list-group">
          {todos.map((todo) => (
            <li className="list-group-item" key={todo.id}>
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </Provider>
  );
}

export default Assignment4;
