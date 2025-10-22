import styled from "styled-components";

export const AllWrap = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
background-color: #3F5EFB;
min-height: 100vh;
`
export const ToDoContainer = styled.div`
gap: 20px;
margin: 30px;
padding: 20px 0 20px 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 600px;
width: 100%;
background-color: #B0DAB9;
border-radius: 25px;
.inputbtn{
    display: flex;
    align-items: center;
    justify-content: center;
    input{
        width: 300px;
        height: 25px;
        border: none;
        outline: 1px solid green;
        padding: 5px;
        padding-left: 15px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }
    button{
        height: 25px;
        border: none;
        background-color: lightseagreen;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        outline: 1px solid green;
        padding: 5px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
}
ul{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 15px;
    li{
       text-align: left;
       list-style-type: none;
       width: 500px;
       justify-content: space-between;
       display: flex;
       border-bottom: 1px solid black;
    }
}
button{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-color: lightblue;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;;
    cursor: pointer;
}
`

export const SecondAllwarp = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #EEAECA;
background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
min-height: 100vh;
`

export const SecondTodoContainer = styled.div`
padding: 20px;
border-radius: 15px;
max-width: 400px;
width: 100%;
display: flex;
background-color: white;
align-items: start;
justify-content: space-between;
flex-direction: column;
gap: 15px;
.headerwrap{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    p{
        font-size: 18px;
        font-weight: 800;
    }
    button{
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
    }
    /* Container uchun style */
.toggle-switch {
  position: relative;
  width: 60px;
  height: 30px;
  background-color: lightblue;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s;
}

/* Slider (harakatlanuvchi qismini) style */
.toggle-slider {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.3s;
}

/* Dark mode holatida slider o‘ngga siljiydi va background o‘zgaradi */
.toggle-switch.dark {
  background: green;
}

.toggle-switch.dark .toggle-slider {
  transform: translateX(30px);
}

}
ul{
    .todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 300px;
}
li{
    width: 350px;               /* li butun kenglik */
    text-align: left;
  display: flex;             /* checkbox, text va button yonma-yon */
  align-items: center;       /* vertikal markazlash */
  justify-content: space-between; /* elementlar orasini bo'shatish */
  padding: 10px;
  box-sizing: border-box;    /* padding kenglikni oshirmasligi uchun */
  transition: all 0.3s;      /* smooth effekt */
}
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
}

.todo-item input[type="checkbox"] {
  margin-right: 10px;
}

.todo-item span.done {
  text-decoration: line-through;
  color: gray;
}

.todo-item button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
.done {
  text-decoration: line-through;
  color: grey; /* ixtiyoriy, matn rangini susaytirish uchun */
}
}
.footeraddingpart{
    display: flex;
    width: 100%;
    justify-content: space-between;
    input{
        border: none;               /* Barcha chiziqlarni olib tashlash */
  border-bottom: 2px solid #007bff;  /* Faqat pastki chiziq */
  background: transparent;    /* Transparent fon */
  padding: 4px 2px;
  outline: none;              /* Fokusda default chiziqni olib tashlash */
  font-size: 16px;
  color: #333;
  width: 250px;               /* Kenglik (xohlaganingizcha) */
  transition: border-color 0.3s ease;
    }
    input:focus {
  border-color: #0056b3;      /* Fokusda to‘qroq ko‘k */
}
    button{
        background-color: #007bff;      /* Asosiy rang (ko‘k) */
        color: #fff;                    /* Matn rangi oq */
        border: none;                   /* Chiziq yo‘q */
        padding: 5px 10px;             /* Ichki masofa */
        border-radius: 8px;             /* Yumaloqlik */
        font-size: 16px;                /* Matn hajmi */
        cursor: pointer;                /* Ko‘rsatkich ko‘rinishi */
        transition: background-color 0.3s ease, transform 0.2s ease;
    }
    button:hover {
        background-color: #0056b3;      /* Hoverda to‘qroq ko‘k */
        transform: scale(1.05);         /* Biroz kattalashadi */
}
}
`

export const LAstWrap = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
padding: 25px;
img{
  width: 24px;
}
ul{
  list-style-type: none;
}
`
