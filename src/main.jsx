import { createRoot } from 'react-dom/client'
import './index.css'
import HomeComponent from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router'
import ProductComponent from './pages/produt'
import ToDosComponent, { NewLessonLearnComponent } from './pages/todo'
import TodosComponents, { ThirdTodoListComponent, SecondtodoCompanent } from './pages/todos'
import TestComponent from './pages/test'
import ModalExample from './pages/modal'
import CalculatorComponent, { LastCalculatorComp, SecondCalcComponent, PasswordInput } from './pages/calculator'

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
      <Route path='/new' element={<NewLessonLearnComponent/>}/>
      <Route path='/modal' element={<ModalExample/>} />
      <Route path='/calculator' element={<CalculatorComponent/>} />
      <Route path='/calculator1' element={<SecondCalcComponent/>} />
      <Route path='/calculator2' element={<LastCalculatorComp/>} />
      <Route path='/login' element={<PasswordInput/>} />
    </Routes>
  </BrowserRouter>
)
