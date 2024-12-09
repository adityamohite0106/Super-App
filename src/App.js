import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movies'
import Recommendation from './pages/Recommendation'
import Widgets from './pages/Widgets'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/widgets" element={<Widgets />} />
        <Route path="/recommendation" element={<Recommendation />} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App