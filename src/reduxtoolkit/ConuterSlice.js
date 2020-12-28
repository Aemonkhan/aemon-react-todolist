import {createSlice} from '@reduxjs/toolkit';

const CounterSlice = createSlice(
{
    name : 'counter',
    initialState: 0,
    reducers: {
        incrementAction: state => state + 1,
        decrementAction: state => state - 1,
        JumpAction : state => state +2
    }
}
);

export const {incrementAction, decrementAction, JumpAction} = CounterSlice.actions
const reducer = CounterSlice.reducer
export default reducer