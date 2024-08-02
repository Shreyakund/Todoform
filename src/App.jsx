import React,{useState} from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() 
{
      const[ListTodo,setListTodo] = useState([]);

      // -------------TO ADD THE NEW TASK IN THE LIST (Related to input box)------------------------------ 
      let addListItem = (InputText) => 
      {
        if(!InputText)
          {
             alert("Write your task");
             return;
          }
        else
          {
            // setListTodo([...ListTodo,InputText]);

            setListTodo((prevListTodo) => {
              const newListTodo = [...prevListTodo, InputText];
              
              // Scroll to bottom after updating the list
              setTimeout(() => {
                const centerContainer = document.querySelector('.center-container');
                if (centerContainer) {
                  centerContainer.scrollTo({
                    top: centerContainer.scrollHeight,
                    behavior: 'smooth',
                  });
                }
              }, 0);
      
              return newListTodo;
            });
          }
      }

      //----------------TO DELETE A OLD TASK IN THE LIST (Related to todo list)---------------------------- 
      const deleteListItem=(key)=>
      {
        let newlistTodo=[...ListTodo];
        newlistTodo.splice(key,1)
        setListTodo([...newlistTodo]);
      }

      // ------------------------------REPRESENT THE UI OF THE COMPONENT---------------------------
      return (
        <div className="main-container">
        <TodoInput addList={addListItem}/>
        <h2 className="text2">TODOList<i className="icon2 fa-solid fa-pen-to-square"></i></h2>
        <hr color='black'></hr>
              <div  className="center-container">
                    <div className="text">
                            {ListTodo.map((listItem,i)=>
                            {
                              return(
                                <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
                              )
                            })}
                    </div>
                    <div className='scroll-bar'>
                      <div className='scroll-box'>

                      </div>
                    </div>
              </div>
        </div>
      )
}

export default App