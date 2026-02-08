import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DotNet from './pages/DotNet'
import './styles/styles.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dotnet" element={<DotNet />} />
      </Routes>
    </Router>
  )
}

export default App