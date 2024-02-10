import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './components/Search';
import Services from './components/Services';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
          <Routes>
            <Route exact path='about' element={<About/>}></Route>
            
            <Route exact path='/' element={<Home/>}></Route>

            <Route exact path='search' element={<Search/>}></Route>
            
            <Route exact path='services' element={<Services/>}></Route>
          </Routes>
    </Router>
    </>
  );
}

export default App;




