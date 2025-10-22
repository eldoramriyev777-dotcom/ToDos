import styled from "styled-components";

export const FullFooter= styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const FullFooterWrap=styled.div`
display: flex;
max-width: 1200px;
width: 100%;
flex-direction: column;
align-items: start;
`
export const FooterTop = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 50px;
width: 1200px;
height: 391px;
flex-shrink: 0;
border-radius: 12px;
background-color: var(--Dark-Blue, #0A2640);
p{
    display: flex;
width: 716px;
height: 139px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
color: #FFF;
text-align: center;
font-size: 48px;
font-style: normal;
font-weight: 400;
}
div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    input{
        width: 370px;
height: 56px;
flex-shrink: 0;
border-radius: 240px;
border: 2px solid #FFF;
background: #FFF;
color: #000;
text-align: left;
font-size: 20px;
font-style: normal;
font-weight: 400;
padding-left: 32px;
    }
    button{
        display: inline-flex;
padding: 16px 56px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 56px;
border: 2px solid var(--Green, #65E4A3);
background-color: var(--Green, #65E4A3);
color: var(--Dark-Blue, #0A2640);
font-size: 20px;
font-style: normal;
font-weight: 700;
    }
}
`
export const FooterDown=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 179px;
height: 474px;
flex-shrink: 0;
background-color: var(--White, #FFF);
`
export const FooterDownLeft= styled.div`
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
gap: 24px;
img{
    display: flex;
width: 156px;
height: 41px;
padding-right: 0;
justify-content: center;
align-items: center;
gap: 10.833px;
flex-shrink: 0;
}
p{
    width: 300px;
    height: 108px;
    color: var(--Gray, #777);
font-size: 16px;
font-style: normal;
font-weight: 400;
}
small{
    width: 250px;
    color: var(--Gray, #777);
font-size: 16px;
font-style: normal;
font-weight: 400;
}
`
export const FooterDownRight = styled.div`
display: flex;
gap: 96px;
div{
    display: flex;
    flex-direction: column;
    gap: 32px;
    p{
        display: flex;
width: 150px;
height: 36px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
color: #000;
font-size: 20px;
font-style: normal;
font-weight: 700;
    }
    span{
        display: flex;
width: 150px;
flex-shrink: 0;
color: var(--Gray, #777);
font-size: 20px;
font-style: normal;
font-weight: 400;
p{
    width: 72px;
    display: inline-flex;
padding: 1px 14px;
align-items: flex-start;
gap: 10px;
border-radius: 120px;
background-color: var(--Green, #65E4A3);
color: var(--Dark-Blue, #0A2640);
font-size: 13px;
font-style: normal;
font-weight: 700;
margin-left: 15px;
}
    }
}
`