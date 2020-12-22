import React, { useState } from 'react'
import './App.css';
import {Provider} from 'react-redux';
import CounterInput from './CounterOutput';
import CounterOutput from './CounterInput';
import store from './store/store'
import AddTodo from './store/AddTodo';
function App(){
  const [counter, setcounter] = useState(0);
  return(
    <Provider store={store}>
    <div className ="App">
      {/* <CounterOutput />
      <CounterInput  /> */}
      <AddTodo />
    </div>
    </Provider>
    
  )
}
export default App;