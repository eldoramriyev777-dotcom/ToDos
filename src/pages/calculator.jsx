import React, { useState } from 'react'
import { AllWrapCon, CalculatorCon, Container, Input, InputWrapper, LastCalcButtons, LastCalcContainer, LastCalcInnerInput, LastCalcWrap, Message, SecContainer, SecWrap, ToggleBtn } from './calculatorStyle'

function InputField({value, onChange}) {
    return (
        <input type="text" value={value} onChange={onChange}/>
    )
}

const CalculatorComponent = () => {
const [darkmode, setDarkmode] = useState(false);
const [value1, setValue1] = useState('');
const [value2, setValue2] = useState('');
const [operation, setOperation] = useState(null);

const clearAll = () => {
    setValue1('');
    setValue2('');
}

const clearOutput = () => {
    setOperation(null);
}

const calculate = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    if (isNaN(num1) || isNaN(num2) ) return 'Values not inserted';
    let result;
    switch (operation) {
        case "+": result = Number((num1 + num2).toFixed(2)); break;
        case "-": result = Number((num1 - num2).toFixed(2)); break;
        case "*": result = Number((num1 * num2).toFixed(2)); break;
        case "/": result = num2 !== 0 
          ? Number((num1 / num2).toFixed(2)) 
          : "Error"; 
          break;
        default: result = "Choose operation"; break;
      }      
    return result;
  };
  
  return (
    <AllWrapCon style={{backgroundColor: darkmode ? '#121212' : '#f5f5f5'}}>
        <button className='mode' style={{backgroundColor: (darkmode ? "#333" : "#f0f0f0"), color: (darkmode ? "#f5f5f5" : "#121212"), padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer"}} 
        onClick={() => setDarkmode(!darkmode)}>{darkmode ? "Lightmode" : "Darkmode"}</button>
        <CalculatorCon style={{backgroundColor: darkmode ? '#FFB4A2' : 'coral'}}>
            <p>Basic Calculator For Arithmetic Counting</p>
            <div className='values'> 
                <small>Value 1</small><InputField value={value1} onChange={(e) => setValue1(e.target.value)}/>
                <small>Value 2</small><InputField value={value2} onChange={(e) => setValue2(e.target.value)}/> 
            </div>
            <div className='values'> 
                <small>Output: </small>
                <span>{calculate()}</span>
            </div>
            <div>
                <button value={operation} onClick={()=> setOperation("+")} className='operation'>+</button>
                <button value={operation} onClick={()=> setOperation("-")} className='operation'>-</button>
                <button value={operation} onClick={()=> setOperation("/")} className='operation'>/</button>
                <button value={operation} onClick={()=> setOperation("*")} className='operation'>*</button>
            </div>
            <div>
                <button onClick={clearAll} className='clear'>Clear All</button>
                <button onClick={clearOutput} className='clear'>Clear Output</button>
            </div>
        </CalculatorCon>
    </AllWrapCon>
  )
}

export default CalculatorComponent

const InputFieldCalc = ({value, onChange, onKeyDown}) => {
    return (
        <input type="number" value={value} onChange={onChange} onKeyDown={onKeyDown}/>
    )
}

export const SecondCalcComponent = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [key1, setKey1] = useState('');
    const [key2, setKey2] = useState('');

    const handleKey1 = (e) => {
        setKey1(e.key);
    }  
    const handleKey2 = (e) => {
        setKey2(e.key);
    }
  return (
    <SecWrap>
        <SecContainer>
            <div>
                <InputFieldCalc onKeyDown={handleKey1} placeholder='value 1' value={value1} onChange={(e) => setValue1(e.target.value)}/>
                <InputFieldCalc onKeyDown={handleKey2} placeholder='value 2' value={value2} onChange={(e) => setValue2(e.target.value)}/>
            </div>
            <p>Summ of them: {Number(value1) + Number(value2)}</p>
            <p>Subtraction: {Number(value1) - Number(value2)}</p>
            <p>Multiplication: {Number(value1) * Number(value2)}</p>
            <p>Division: {value2 !== 0 ? Number((Number(value1) / Number(value2)).toFixed(2)) : "Cannot devided by 0"}</p>
            <p>Last Pressed on INPUT 1: {key1} <br />
            Last Pressed on INPUT 2: {key2}
            </p>
         </SecContainer>
    </SecWrap>
  )
}


export const LastCalculatorComp = () => {
    const [input, setInput] = useState('');
    const [operation, setOperation] = useState(null);
    const [number, setNumber] = useState(null);


    const handleNumberClick  = (value) => {
        setInput((prev) => prev + value);
    }

    const handleOperationClick = (op) => {
        if (input === '') return;
        setNumber(parseFloat(input));
        setOperation(op);
        setInput('');
    }

    const handleEqualClick = () => {
        if (operation === null || number === null || input === '') return;
        const secondNumber = parseFloat(input);
        let result; 
        switch (operation) {
            case '+':
              result = number + secondNumber;
              break;
            case '-':
              result = number - secondNumber;
              break;
            case '*':
              result = number * secondNumber;
              break;
            case '/':
              result = secondNumber !== 0 ? number / secondNumber : 'Error';
              break;
            default:
              return;
          }
          setInput(result.toString());
            setOperation(null);
            setNumber(null);
    }

    const handleClear = () => {
        setInput('');
        setOperation(null);
        setNumber(null);
      };
      
  return (
    <LastCalcWrap>
        <LastCalcContainer>
            <LastCalcInnerInput readOnly placeholder="0" value={input}/>
            <LastCalcButtons>
                <button onClick={() => handleNumberClick('7')} className='num'>7</button>
                <button onClick={() => handleNumberClick('8')} className='num'>8</button>
                <button onClick={() => handleNumberClick('9')} className='num'>9</button>
                <button onClick={() => handleOperationClick('+')} className='op'>+</button>
                <button onClick={() => handleNumberClick('4')} className='num'>4</button>
                <button onClick={() => handleNumberClick('5')} className='num'>5</button>
                <button onClick={() => handleNumberClick('6')} className='num'>6</button>
                <button onClick={() => handleOperationClick('-')} className='op'>-</button>
                <button onClick={() => handleNumberClick('1')} className='num'>1</button>
                <button onClick={() => handleNumberClick('2')} className='num'>2</button>
                <button onClick={() => handleNumberClick('3')} className='num'>3</button>
                <button onClick={() => handleOperationClick('*')} className='op'>×</button>
                <button onClick={handleClear} className='clear'>C</button>
                <button onClick={() => handleNumberClick('0')} className='num'>0</button>
                <button onClick={handleEqualClick} className='equal'>=</button>
                <button onClick={() => handleOperationClick('/')} className='op'>÷</button>
            </LastCalcButtons>
        </LastCalcContainer>
    </LastCalcWrap>
  )
}

export const PasswordInput = () => {
    const [password, setPassword] = useState(""); // input qiymati
    const [showPassword, setShowPassword] = useState(false); // show/hide toggle
  
    const isValid = password.trim().length >= 8; // parol uzunligi tekshiruvi
  
    return (
      <Container>
        <h2>Parol kiriting</h2>
        <InputWrapper>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Kamida 8 ta belgi"
          />
          <ToggleBtn onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </ToggleBtn>
        </InputWrapper>
        <Message valid={isValid}>
          {isValid
            ? "Parol to‘g‘ri"
            : "Parol kamida 8 ta belgi bo‘lishi kerak"}
        </Message>
      </Container>
    );
  };
  

