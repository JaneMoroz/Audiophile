import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import { Home } from './pages'

// Shared Layout
import { Navbar, Footer } from './components'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
