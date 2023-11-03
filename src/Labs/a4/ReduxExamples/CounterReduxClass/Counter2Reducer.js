import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count2: 0,
};

const counter2Slice = createSlice({
    name: "Counter2",
    initialState,
    reducers: {
        increment2: (state) => { 
            state.count2++;
        },
        decrement2: (state) => {
            state.count2--;
        },
        setCount2: (state, action) => {
            state.count2 = action.payload;
        },
    },
});

export const {increment2, decrement2, setCount2} = counter2Slice.actions;
export default counter2Slice.reducer;

// const [count, setCount] = useState(0);
//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);