import React from 'react'
import ReactDOM from 'react-dom/client'
import SegmentPage from './pages/SegmentPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SegmentPage slug="b2b" />
  </React.StrictMode>,
)