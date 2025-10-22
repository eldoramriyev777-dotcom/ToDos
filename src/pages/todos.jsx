import React, { useDebugValue, useState } from 'react'
import { AllWrap, LAstWrap, SecondAllwarp, SecondTodoContainer, ToDoContainer } from './todoStyle'
import del from '../assets/todoasset/del.svg'
import pluslo from '../assets/todoasset/pluslogo.png'

const TodosComponents = () => {
      const [newTask, setNewTask] = useState("")
      const [tasks, setTask] = useState([])

      const addTask = () => {
        if (newTask.trim() !== "") {
          setTask([...tasks, newTask]);
          setNewTask("")
        }
      }
const deleteTask = (indexToRemove) => {
setTask(tasks.filter((_, index) => index !== indexToRemove));
};

const deleteAll = () => {
    setTask([])
}
  return (
<AllWrap>
    <ToDoContainer>
        <div className='inputbtn'>
            <input placeholder='add new activity..' type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <button onClick={addTask}>Add</button>
        </div>
        <ul>
          {tasks.map((task, index) =>  (<li key={index}>{index + 1}. {task} <button onClick={() => deleteTask(index)} style={{backgroundColor: "transparent",
            border: "none", cursor: "pointer"
          }}><img src={del} alt="del" /></button> </li>))}
        </ul><br /><br />
        <button onClick={deleteAll } className='delallbtn'>Delete All</button>
    </ToDoContainer>
</AllWrap>
  )
}

export default TodosComponents

export const SecondtodoCompanent = () => {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [darkmode, setDarkmode] = useState(false)
 
  const addFunc = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask])
      setNewTask("")
    }
  }

  const delFunc = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete all tasks?");
    if (confirmDelete) {
      setTasks([]); 
    }
  }

  
    const toggleDone = (index) => {
      const newTasks = [...tasks];
      newTasks[index].done = !newTasks[index].done;
      setTasks(newTasks);
    };
  
    const deleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i !== index));
    };

  return (
    <SecondAllwarp style={{background: darkmode
      ? "radial-gradient(circle, #1A2AFA 0%, #99224F 100%)" // dark mode
      : "radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)", // light mode
    color: darkmode ? "#fff" : "#000"}}>
    <SecondTodoContainer style={{backgroundColor: darkmode ? "black" : "white", color: darkmode ? "white" : "black"}}>
      <div className='headerwrap'>
        <p>To Do List</p>
        <div
        className={`toggle-switch ${darkmode ? "dark" : ""}`}
        onClick={() => setDarkmode(!darkmode)}
      >
        <div className="toggle-slider"></div>
      </div>
        <button style={{color: darkmode ? "white" : "black"}} onClick={delFunc}>Clear all tasks</button>
      </div>
      <ul className="todo-list">
      {tasks.map((task, index) => (
        <li key={index} className="todo-item">
          <span className={task.done ? "done" : ""}>{index+1}. {task}</span>
          <button style={{color: darkmode ? "white" : "black"}} onClick={() => deleteTask(index)}>🗑️</button>
        </li>
      ))}
    </ul>
      <div className='footeraddingpart'>
      <input style={{color: darkmode ? "white" : "black"}} value={newTask} onChange={(e) => setNewTask(e.target.value)} type="text" placeholder='enter task here...' />
      <button style={{color: darkmode ? "white" : "white"}} onClick={addFunc}>Add</button>
      </div>
    </SecondTodoContainer>
    </SecondAllwarp>
  )
}

export const ThirdTodoListComponent = () => {
const [todo, setTodo] = useState("")
const [todos, setTodos] = useState([])
const addFunc = () => {
  if (todo.trim() !== '') {
    setTodos([...todos, todo])
    setTodo("")
  }

}
const deleetTask = (index) => {
  setTodos(todos.filter((_, i) => i !== index))
}

  return (
    <LAstWrap>
      <div>
      <input value={todo}  onChange={(e) => setTodo(e.target.value)} placeholder='type here...' type="text" />
      <button onClick={addFunc}><img src={pluslo} alt="pluslo" /></button>
      </div>
      <ul>
        {todos.map((todo, index) => (<li key={index}>{index + 1}) {todo} <button onClick={() => deleetTask(index)}>delete</button></li>))}
      </ul>
    </LAstWrap>
  )
}
