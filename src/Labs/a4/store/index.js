import helloReducer from "../ReduxExamples/HelloWorldRedux/helloReducer";
import Counter1Reducer from "../ReduxExamples/CounterReduxClass/Counter1Reducer";
import Counter2Reducer from "../ReduxExamples/CounterReduxClass/Counter2Reducer";
import addReducer from "../ReduxExamples/AddRedux/addReducer";
import todosReducer from "../ReduxExamples/todos/todosReducer";

import { configureStore } from "@reduxjs/toolkit";

// COLLATING ALL IN ONE SINGLE STORE FILE
const store = configureStore({
    reducer: {
        // hello: helloReducer, 
        // want to use the same name as "helloReducer" ~ helloReducer: helloReducer = helloReducer

        helloReducer: helloReducer,
        Counter1Reducer,
        Counter2Reducer,
        addReducer,
        todosReducer,

        // data here is the latest state of initialState message
        // equivalent to doing this:
        // helloReducer: {
        //     message: "Hello World"
        // },
    },
});

export default store;