import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Make sure this path is correct
import './styles.css' // or index.css

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)