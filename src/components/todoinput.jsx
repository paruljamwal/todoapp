
import {useState} from 'react';
import './todo.css'
//input is a child
export const Todoinput=({getdata})=>{
    const [text,setText]=useState("");
    //send text to todolist----child
    return (
        <div>
              <input onChange={(e)=>{
                  //console.log(e.target.value)
                  setText(e.target.value)
                  //console.log(e.target.value)
              }} type="text" placeholder="Write Something Here"></input>
              <button id='add' onClick={()=>{
                  //calling todo data when we click btn 
                  getdata(text)
              }}>+</button>
        </div>
    )
}