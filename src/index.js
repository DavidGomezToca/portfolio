import './index.css'
import React from 'react'
import App from './components/App'
import ReactDOM from 'react-dom/client'
import AppProviders from './providers/AppProviders'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
)