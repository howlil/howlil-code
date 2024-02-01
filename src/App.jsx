import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Experience from "./pages/Experience"
import About from "./pages/About"

const App = ()=>{
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Project" element={<Project/>}/>
              <Route path="/Experience" element={<Experience/>}/>
              <Route path="/*" element={<NotFound/>}/>
          </Routes>
      </Router>
  )
}

export default App;
