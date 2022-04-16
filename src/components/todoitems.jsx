
import './todo.css'
export const TodoItems=({todo,handelstatus})=>{
    return(
        <div className='list'>
            {/* <div>id:{todo.id}</div> */}
            {/* todo became obj after add toggle bcz it return string so we take data into obj */}
            {/* {todo.title}-{todo.status ? "Done" : "Not Done"} <button>Toggle</button> */}
            {/* <div>id:{todo.id}</div> */}
            {/* goto parent list and find the element by id */}
            {/* <button id='delete' onClick={()=>handelstatus(todo.id)}>X</button> */}
            {todo.title}----------{todo.status ? "Done" : "NotDone"} 
            <button className={todo.status ? "Done" : "NotDone"} id="toggle" onClick={()=>handelstatus(todo.id)}>
            Toggle</button>
           
        
        </div>
    )
}