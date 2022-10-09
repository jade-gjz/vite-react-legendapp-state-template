import React from 'react'
import ReactDOM from 'react-dom/client'
import { enableLegendStateReact } from '@legendapp/state/react'
import App from './App'
import './index.css'

enableLegendStateReact()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
