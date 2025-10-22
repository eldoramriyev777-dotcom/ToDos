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