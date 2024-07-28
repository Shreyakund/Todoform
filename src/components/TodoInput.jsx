import React,{useState} from 'react'
import TodoList from './TodoList';

function TodoInput(props) {
  const[InputText,SetInputText] = useState('');
  const handleEnterPress = (e)=>{
    if(e.keyCode===13){
        props.addList(InputText)
        SetInputText("")
    }
  }
  return (
    <div className="input-container">
        <input 
        type="text" 
        className="input-box" 
        placeholder="Enter your task"
        value={InputText}
        onChange={e=>{
            SetInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
        />
        <button className='btn'
        onClick={()=>{
            props.addList(InputText)
            SetInputText("")
        }}><i className="fa-solid fa-plus"></i></button>
    </div>
  );
}

export default TodoInput;