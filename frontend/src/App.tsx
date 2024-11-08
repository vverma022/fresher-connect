import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignIn from './pages/signin'
import Signup from './pages/siginup'
import MainPage from './pages/main'
import LandingPage from './pages/landingpage'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<LandingPage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/m' element={<MainPage />} />
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
