import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Cases from './pages/Cases/Cases'
import Buffet from './pages/Buffet/Buffet'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/servicos/buffet" element={<Buffet />} />
      </Routes>
    </Router>
  )
}

export default App
