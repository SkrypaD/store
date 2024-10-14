import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouteHandler from './routes/RouteHandler.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteHandler/>
  </StrictMode>,
)
