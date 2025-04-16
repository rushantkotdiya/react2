import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import About from './About'

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </StrictMode>,
)
