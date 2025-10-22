import { createRoot } from 'react-dom/client'
import './index.css'
import HomeComponent from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router'
import ProductComponent from './pages/produt'
import ToDosComponent from './pages/todo'
import TodosComponents, { ThirdTodoListComponent, SecondtodoCompanent } from './pages/todos'
import TestComponent from './pages/test'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<ProductComponent />} />
      <Route path='/home' element={<HomeComponent />} />
      <Route path='/product' element={<ProductComponent/>} />
      <Route path='/todos' element={<ToDosComponent/>} />
      <Route path='/todo' element={<TodosComponents/>}/>
      <Route path='/todo1' element={<SecondtodoCompanent/>}/>
      <Route path='/todo2' element={<ThirdTodoListComponent/>}/>
      <Route path='/test' element={<TestComponent/>}/>
    </Routes>
  </BrowserRouter>
)
