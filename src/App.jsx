import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Cases from './pages/Cases/Cases'
import Buffet from './pages/Buffet/Buffet'
import Cerimonial from './pages/Cerimonial/Cerimonial'
import TeamOperational from './pages/TeamOperational/TeamOperational'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/servicos/buffet" element={<Buffet />} />
        <Route path="/servicos/cerimonial" element={<Cerimonial />} />
        <Route path="/servicos/equipe-operacional" element={<TeamOperational />} />
      </Routes>
    </Router>
  )
}

export default App
