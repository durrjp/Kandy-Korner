import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import KandyKorner from "./components/KandyKorner"

ReactDOM.render(
  <Router>
      <KandyKorner />
  </Router>
  , document.getElementById('root')
)


