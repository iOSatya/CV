import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomeView from './views/HomeView.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div style={{background: 'var(--dark)', color: 'var(--light)'}}>
        <Routes>
          <Route path='/' element={<HomeView />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>,
)
