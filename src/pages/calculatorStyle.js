import styled from "styled-components";

export const AllWrapCon = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
flex-direction: column;
gap: 20px;
.mode{
    padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
`;
export const CalculatorCon = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 30px;
gap: 30px;
border-radius: 25px;
input {
  width: 90px;
  height: 28px;
  background-color: #F0F0F0;
  border: 1px solid #999;
  text-align: center;
  font-size: 16px;
}
.values{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: 600;
    color: #F0F0F0;
    font-size: 20px;
}
button.operation {
  width: 55px;
  height: 40px;
  background-color: #4CAF50;
  color: white;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin: 5px;
}

button.operation:hover {
  background-color: #45A049;
}
button.clear {
  width: 100px;
  height: 35px;
  background-color: #f44336;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin: 5px;
}

button.clear:hover {
  background-color: #D32F2F;
}

p{
background-color: #0D47A1;
padding: 10px;
color: white;
font-size: 18px;
border-radius: 5px;
}
`
export const SecWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #ff7f50, #ffb4a2);
  padding: 20px;
`
export const SecContainer = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 30px 40px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 400px;
  color: #fff;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease;

  p {
    margin: 10px 0;
    font-size: 16px;
    line-height: 1.4;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
    input{
        padding: 10px 14px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  outline: none;
  text-align: center;
  background-color: #ffffffcc;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:focus {
    background-color: #fff;
    box-shadow: 0 0 8px rgba(255, 127, 80, 0.6);
  }

  &::placeholder {
    color: #666;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 10px;
  }
    }
  }

  @media (max-width: 480px) {
    padding: 25px;
    font-size: 14px;

    p {
      font-size: 14px;
    }
  }
`
export const LastCalcWrap = styled.div`
display: flex; 
justify-content: center; 
align-items: center; 
min-height: 100vh; 
background-color: #3a3a3a;
`
export const LastCalcContainer = styled.div`
background: linear-gradient(180deg, #d3d3d3 0%, #bfbfbf 100%); 
border-radius: 10px; 
padding: 20px; 
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); 
width: 320px; 
max-width: 90%;
`
export const LastCalcInnerInput = styled.input`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 6px;
  margin-bottom: 15px;
  padding: 0 10px;
  font-size: 22px;
  background: #f2f2f2;
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.3);
  text-align: right;
  color: #333;

  &::placeholder {
    color: #888;
    font-size: 20px;
  }

  &:focus {
    outline: none;
  }
`;

export const LastCalcButtons = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 10px;




button {
height: 60px;
font-size: 20px;
border: none;
border-radius: 6px;
cursor: pointer;
box-shadow: 0 4px 0 rgba(0, 0, 0, 0.3);
transition: transform 0.1s ease-in-out;

&:active {
  transform: translateY(2px);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.3);
}




}




/* Number buttons */
button.num {
background: linear-gradient(180deg, #f9f9f9 0%, #dcdcdc 100%);
color: #000;
}




/* Operator buttons */
button.op {
background: linear-gradient(180deg, #555 0%, #222 100%);
color: #fff;
}




/* Clear button */
button.clear {
background: linear-gradient(180deg, #d32f2f 0%, #b71c1c 100%);
color: #fff;
}




/* Equal button */
button.equal {
background: linear-gradient(180deg, #333 0%, #111 100%);
color: #fff;
}

@media (max-width: 400px) {
button {
height: 50px;
font-size: 18px;
}

input {
  height: 50px;
  font-size: 18px;
}
}
`
export const Container = styled.div`
  width: 350px;
  margin: 50px auto;
  font-family: Arial, sans-serif;
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px 0 0 5px;
  border: 1px solid #ccc;
  outline: none;
`;

export const ToggleBtn = styled.button`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-left: none;
  border-radius: 0 5px 5px 0;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const Message = styled.p`
  margin-top: 10px;
  font-weight: bold;
  color: ${(props) => (props.valid ? "green" : "red")};
`;