import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FireBaseProvider } from './Context/FireBaseContext.jsx'
import AuthProvider from './Context/Auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <FireBaseProvider>
      <App />
    </FireBaseProvider>
    </AuthProvider>
  </React.StrictMode>,
)
