import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import ProjectDetail from './components/ProjectDetail'
import Cursor from './components/Cursor'
import ScrollToHash from './components/ScrollToHash'

export default function App() {
  return (
    <>
      <div className="grain" />
      <Cursor />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
