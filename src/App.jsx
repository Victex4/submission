import './App.css'
import SignUp from './SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
