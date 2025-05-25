import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'
import Main from './pages/Main.jsx'
import Upgrades from './pages/Upgrades.jsx'
import './App.css'

const root = createRoot(document.getElementById("root"))

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/upgrades" element={<Upgrades />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)
