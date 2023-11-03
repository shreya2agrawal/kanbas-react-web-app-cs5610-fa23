import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count1: 0,
};

const counter1Slice = createSlice({
    name: "Counter1",
    initialState,
    reducers: {
        increment1: (state) => {
            state.count1++;
        },
        decrement1: (state) => {
            state.count1--;
        },
        setCount1: (state, action) => {
            state.count1 = action.payload;
        },
    },
});

// used by components to import the functions
export const {increment1, decrement1, setCount1} = counter1Slice.actions;
// used by the store to import and create the store
export default counter1Slice.reducer;

// const [count, setCount] = useState(0);
//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);