const increment ='INCREMENT'
const decrement ='DECREMENT'
export const addtodo = 'ADD_TODO'
export const deletetodo = 'DELETE_TODO'

export function incAction(){
    return{
        type: increment
    }
}export function decAction(){
    return{
        type: decrement
    }
}
export function addTodoAction(todo){
    return {
        type: addtodo,
        payload: todo,
        
    }
}
// export function deleteTodoAction(id){
//     return {
//         type: deletetodo,
//         payload:id

//     }
// }