import Todo from "./Todo"
import {v4 as uuid} from "uuid"

function TodoList({todoList}){
    
    return (<>
        
    
        <ol>
        {todoList.map((el)=>(
            <Todo key ={uuid()} todo={el}></Todo>
            ))}
        </ol>


        
    
    </>)
}

export default TodoList