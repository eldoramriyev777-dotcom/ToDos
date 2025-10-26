import React, { use, useState } from 'react'

const ToDosComponent = () => {
  const [state, setState] = useState(0)
  const [text, setText] = useState("")
  const [color, setColor] = useState("red")
  const [newTask, setNewTask] = useState("")
  const [tasks, setTask] = useState([])
  const [user, setUser] = useState({name: "", age: ""})
  const [darkmode, setDarkmode] = useState(true)

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTask([...tasks, newTask]);
      setNewTask("")
    }
  }
   return (
    <div>
      <h1>Count: {state}</h1>
        <button onClick={() => setState(state+1)}>Increanment</button>
        <button onClick={() => setState(state-1)}>Decrenament</button>
        <button onClick={() => setState(0)}>Reset</button><br /><br />

        <input type="text" placeholder='Your name...' value={text} onChange={(e) => setText(e.target.value)}/>
        <p>Salom, Hurmatli {text ? text : "Mehmon"}</p><br />
        <p style={{color: color, backgroundColor: (color==="red"? "green":"red")}}>Current color is {color}</p>
        <button onClick={() => color === "red" ? setColor("green") : setColor("red")}>Change color</button><br /><br />

        <input placeholder='add new activity..' type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
        <button onClick={addTask}>Add</button>
        <ul>
          {tasks.map((task, index) =>  (<li key={index}>{index + 1}. {task}</li>))}
        </ul><br /><br />

        <input type="text" placeholder='name' value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}/>
        <input type="text" placeholder='age' value={user.age} onChange={(e) => setUser({...user, age: e.target.value})}/>
        <p>Ismingiz: {user.name ? `${user.name}`: "(Ism kiriting)"}<br/>
          Yoshingiz: {user.age ? `${user.age}` : "(Yosh kiriting)"}
        </p>

        <div style={{backgroundColor: darkmode? "white" : "red", padding: "20px", display: darkmode? "flex" : "block",
          alignItems: 'center', justifyContent: 'center', gap: darkmode? "20px" : "25px"
        }}>
          <p>Hello JavaScript</p>
          <h1 style={{color: darkmode? "black" : "white"}}>Light Mode</h1>
          <button onClick={() => setDarkmode(!darkmode)}>Change Mode</button>
        </div>
    </div>
  )
}

export default ToDosComponent

function ToDolist ({title}) {
  return <li>{title}</li>
}

function INPUT ({value, onChange}) {
  return <input type="text" value={value} onChange={onChange}/>
}

export const NewLessonLearnComponent = () => {
  const [inputValue, setInputValue] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [color, setColor] = useState("lightseagreen")
  const [key, setKey] = useState("")
  const [count, setCount] = useState(0)
  const [a, setA] = useState("")
  const [b, setB] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Your name is ${name} ${surname}`)
    setSurname("")
    setName("")
  }
  const handleKey = (e) => {
    setKey(e.key)
  }
  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <h1>Dear {inputValue ? inputValue : "Guest"}</h1>

    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='your name...' value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="text" placeholder='yuor surname...' value={surname} onChange={(e) => setSurname(e.target.value)}/>
      <button type='submit'>Send</button>
    </form>

    <div style={{backgroundColor: color, padding: "20px", margin: "20px"}} 
      onMouseEnter={() => setColor("coral")}
      onMouseLeave={() => setColor("lightseagreen")}
    >
      <p>This is box</p>
    </div>

    <input type="text" placeholder='press any button...' onKeyDown={handleKey}/>
    <p>Pressed Key: {key}</p>

    <button onDoubleClick={() => setCount(count-4)} onClick={() => setCount(count+1)}>Count: {count}</button>

    <ToDolist title={"Reading a book"}/>
    <ToDolist title={"Coding for 4 hours"}/>
    <ToDolist title={"Running in the morning"}/>

    <INPUT value={a} onChange={(e) => setA(e.target.value)}/>
    <INPUT value={b} onChange={(e) => setB(e.target.value)}/>
    <p>Summ: {Number(a) + Number(b)}</p>
    </div>
  )
}
