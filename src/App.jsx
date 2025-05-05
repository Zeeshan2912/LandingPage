import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import LandingPage from './pages/LandingPage/LandingPage'
import KpiForm from './pages/KpiForm/KpiForm'
import Dashboard from './pages/Dashboard/Dashboard'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/kpi-form" element={<KpiForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App