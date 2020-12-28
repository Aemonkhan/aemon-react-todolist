import React, { useState } from 'react'
import './App.css';
import {Provider} from 'react-redux';
import CounterInput from './CounterOutput';
import CounterOutput from './CounterInput';
import AddTodo from './AddTodo';
import store from './reduxtoolkit/Store';
import CounterButton from './reduxtoolkit/CounterButton';
import CounterView from './reduxtoolkit/CounterView';
// import store from './store/store'

function App(){
  const [counter, setcounter] = useState(0);
  return(
    <Provider store={store}>
    <div className ="App">
      {/* <AddTodo /> */}
      {/* <CounterOutput />
      <CounterInput  /> */}
      <CounterButton />
      <CounterView/>
      {/* <CounterInput /> */}
     
    </div>
    </Provider>
    
  )
}
export default App;