import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './Reducer';
 import reducer from './ConuterSlice';

const store= configureStore({
    // reducer:{
    //     counter : counterReducer}
    reducer : reducer
    }
);
export default store;