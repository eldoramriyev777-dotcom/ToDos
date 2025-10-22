import styled from "styled-components";


export const NavWrap = styled.div`
padding: 50px 0;
display: flex;
align-items: center;
justify-content: center;
background-color: #0A2640;
`

export const Container = styled.div`
max-width: 1192px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #0A2640;;
`
export const Logo = styled.img`

`
export const NavRight = styled.div`
display: flex;
align-items: center;
justify-content: center;

p{
color: #FFF;
font-size: 16px;
font-weight: 600;
padding-right: 40px;
}
button{
display: flex;
padding: 8px 40px;
align-items: flex-start;
gap: 8px;
color: var(--Dark-Blue, #0A2640);
font-size: 16px;
font-weight: 700;
border-radius: 24px;
border: 2px solid #FFF;
background-color: #FFF;
cursor: pointer;
}
button:hover{
    background-color: #f2f2f2;
}
`