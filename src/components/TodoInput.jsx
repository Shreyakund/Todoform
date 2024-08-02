import React,{useState} from 'react'

function TodoInput(props) {
  const[InputText,SetInputText] = useState('');

// -------------FUNCTION TO ADD NEW ITEM CLICKING "ENTER" KEY-------------------
  const handleEnterPress = (e)=>{
    if(e.key==="Enter"){
        props.addList(InputText)
        SetInputText("")
        // window.scrollTo(0,document.center-container.scrollHeight);
    }
  }

//------------TO TAKE INPUT CLICKING "+" OR "ENTER" BUTTON--------------------- 
  return (
    <div className="input-container">
        <input type="text" className="input-box" placeholder="Enter your task" value={InputText}
        onChange={(e)=>{
            SetInputText(e.target.value)
        }}

        onKeyDown={handleEnterPress} // ADD NEW ITEM CLICKING "ENTER" KEY
        />
        <button className='btn'
        onClick={()=>{
            props.addList(InputText)//same as line 9 & 10
            SetInputText("")
          
        }}><i className="fa-solid fa-plus"></i></button>
    </div>
  )
}

export default TodoInput