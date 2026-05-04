import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './MainLayout.jsx'
import Pokecoses from './pokecoses.jsx'

function App() {
  return (
    <Pokecoses>
    </Pokecoses>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
