import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import WhosFakeApp from './WhosFakeApp'
import About from './components/About'
import Contact from './components/Contact'
import Privacy from './components/Privacy'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Existing single-page app stays at the root. */}
        <Route path="/" element={<WhosFakeApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* Any unknown client-side path falls back to the home page. The
            Netlify SPA redirect (see netlify.toml) ensures a hard refresh on
            these paths also serves index.html so this router can take over. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
