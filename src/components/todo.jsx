import { useState } from 'react'
import { Todoinput } from './todoinput'
import {TodoItems} from './todoitems'
import {nanoid} from 'nanoid';
import './todo.css'
 //todo is a parent
function Todo() {
    
    const [todoList,setTodoList]=useState([]);

    //callback fun -----get data from todolist (child---parent);
    const getlistdata=(todo)=>{

        const payload={
            title:todo,
            status:false,
            id:nanoid(5),
        }
        console.log("recieved",todo);
        //no push pop it change the array so

        //use spread op create new array but add previous items as well.
        setTodoList([...todoList,payload])
        // by this shown  in screen 
        //usestate rerender this again n again
        //its like push but it create new array
    }

    const handelstatus=(id)=>{
        // console.log("id",id);
        //find this id from todolist
        setTodoList(todoList.map(e=>e.id === id ? {...e, status : !e.status}:e))
        //toggle it status
        //get new array
    }
    
    return (
        <div className='main'>
            <h1>Todo List</h1>
            {/* make todo list here */}
            {/* //callinput */}
            <Todoinput getdata={getlistdata}></Todoinput>
                { 
                    //map to the list get list
                    //populate it
                    todoList.map((e)=>( 
                    // <div>{e}</div>
                    <TodoItems handelstatus={handelstatus} todo={e}></TodoItems>
                    ))
                }
          


        </div>

    )
}
export { Todo }