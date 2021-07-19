import React, { useState }  from 'react';
import './App.css';
const TodoListItem = (props) =>{
    const { text, index } = props
    const [remove,setRemove]=useState('');
    const removeFunc = () =>{
        setRemove(()=>{
            return setRemove( ' ');
            console.log('remove',text)
        })

    }
    
    return(
    <>
    <li key={index}><b> {text} </b>
    </li>
    <button className ='removeBtn'onClick={removeFunc}>x</button>
    </>
    )
}
export default TodoListItem;