
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/home/page'
import Contato from './pages/contato/page'

export default function App(){
  return(
  <>
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contato' element={<Contato/>}></Route>
        </Routes>
      </div>
     
    </Router>
    <Footer/>
  </>
  )
}


