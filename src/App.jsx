import { useState } from 'react'
import './App.css'

function App() {
  const [newTask,setNewTask] = useState('');
  const [list, setList] = useState([]);

  function addTask(){
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newTask
    }


    if(!newTask){
      alert("Please enter a task");
      return;
    }
    setList(oldlist => [...oldlist,item])
    setNewTask('');
    console.log(list);
  }

  function deleteItem(id){
    const newArr = list.filter(item => item.id !== id);
    setList(newArr);
  }

  return (
    <>
    <div className='todoContainer'>
      <div className='header'>
          <h1>To Do List</h1>
      </div>
      <div className='ibox'>
        <input className='input' placeholder='Enter A Task' type='text' required value={newTask} onChange={e => setNewTask(e.target.value)}></input>
        <button className='btn' onClick={()=>addTask()}>Add Task</button>
      </div>
      <div className='listings'>
        <ul className='list'>
          {list.map(item => {
            return(
              <li key={item.id}>{item.value}<button className='dlt' onClick={()=> deleteItem(item.id)}>Delete</button></li>
            )
          })}
        </ul>
      </div>
    </div>
    </>
  )
}

export default App
