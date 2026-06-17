
import './App.css';
import { useState, useRef } from 'react';

function App() {

  const [todos,settodos] = useState([])
  const inputRef=useRef()
  const handleAdd=()=>{
    const text = inputRef.current.value
    const NewItem={
      complete:false,
      text:text
    }
    settodos([...todos,NewItem])
    inputRef.current.value=""
    console.log(todos)
  }
  const handleDone=(index)=>{
    const newtodos=[...todos]
    newtodos[index].complete=!newtodos[index].complete
    settodos(newtodos)
    // console.log(newtodos[index].complete)
    console.log(todos)
  }

  const handleDelete=(index)=>{
    const newtodos=[...todos]
    newtodos.splice(index,1)
    settodos(newtodos)
  }

  
 return (
    <div className="App">
      <h2>TODO List</h2>
     <ul>
      {todos.map((item, index) => {
      return (
      <li key={index} className='container-item'>
        
        <span
          className={item.complete ? "done" : ""}
          onClick={() => handleDone(index)}
        >
          {item.text}
        </span>

        <span className='cross' onClick={() => handleDelete(index)}>
          ❌
        </span>

      </li>
       );
     })}
    </ul>
      <div className="input-group">
        <input ref={inputRef} placeholder='....Enter Item'></input>
      <button onClick={handleAdd}>Add</button>
      </div>





    </div>
 )
}

export default App;
