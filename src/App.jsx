import React,{useState} from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';

function App() {
  const[ListTodo,setListTodo] = useState([]);

  let addList = (InputText) => {
    if(InputText!=='')
       setListTodo([...ListTodo,InputText]);
  }

  const deletelistItem=(key)=>{
    let newlistTodo=[...ListTodo];
    newlistTodo.splice(key,1)
    setListTodo([...newlistTodo]);
  }
  return (
    <div className="main-container">
       <div className="center-container">
          <div className="text">
           <TodoInput addList={addList}/>
           <h2 className='text'>TODOList<i className="icon2 fa-solid fa-pen-to-square fa-bounce"></i></h2>
           <hr color='black'></hr>
           {ListTodo.map((listItem,i)=>{
              return(
                <TodoList key={i} index={i} item={listItem} deleteItem={deletelistItem}/>
              )
           })}
          </div>
       </div>
    </div>
  )
}

export default App