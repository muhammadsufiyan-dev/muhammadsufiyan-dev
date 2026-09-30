import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/index.css'

// basename automatically matches the "base" set in vite.config.js, so the
// router works correctly whether you're at a domain root or a subpath like
// https://muhammadsufiyan-dev.github.io/muhammadsufiyan-dev/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
