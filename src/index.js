import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './App'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={ <App /> }>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);