import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import { Home } from './assets/pages'

// Shared Layout
import { Navbar, Footer } from './assets/components'

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
