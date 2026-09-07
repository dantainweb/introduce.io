import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WorksPage from './pages/WorksPage'
import WorkDetailPage from './pages/WorkDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/works/:id" element={<WorkDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
