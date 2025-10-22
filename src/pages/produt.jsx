import React, { useState } from 'react'
// function Welcomer(props) {
//     return <h2>Hi {props.name} </h2>
// }
// function AlertRet() {
//     return alert("Clicked!")
// }

// function Button() {
//     return <button onClick={AlertRet}>Click</button>
// }


const ProductComponent = () => {
const [state, setState] = useState(0)

function increament() {
    setState(state + 1)
    // console.log("+1")
    // alert('+1')
}

function decreament() {
    if (state > 0) {
        setState(state - 1)
    }
    // console.log("-1")
    // alert('-1')
}

  return (
    <div>
        <PropsCompanent/>
        {/* <TestComponent/> */}
        {/* <Welcomer name='Eldor'/>
        <Welcomer name="Ulug'bek"/> */}
        {/* <Button/> <br /> */}
        <h1>Count is {state}</h1>
        <button onClick={increament}>increament</button>
        <button onClick={decreament}>decreament</button>
        </div>
  )
}

export default ProductComponent

const PropsCompanent = () => {
  return (
    <div>
      
    </div>
  )
}

