import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)

// React.StrictMode is responsible for creating 2 renderings
// only in local while development
// does not happen when a build is taken for production
// React is doing an extra rendering to check for any inconsistencies

