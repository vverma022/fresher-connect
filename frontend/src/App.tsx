import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignIn from './pages/signin'
import Signup from './pages/siginup'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<SignIn />} />
      <Route path='/s' element={<Signup />} />
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
