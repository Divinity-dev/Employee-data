import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Departments from './pages/Departments'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/Departments" index element={<Departments />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

