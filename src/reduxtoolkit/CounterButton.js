import React from 'react'
import { useDispatch} from 'react-redux'
import {decrementAction, incrementAction, JumpAction} from '../reduxtoolkit/ConuterSlice'
function CounterButton (){
 const dispatch = useDispatch();
 return (
     <div>
         <button onClick={()=>dispatch(incrementAction())}>+</button>
         <button onClick={()=>dispatch(decrementAction())}>-</button>
         <button onClick={()=>dispatch(JumpAction())}>add</button>

     </div>
 )
}
export default CounterButton