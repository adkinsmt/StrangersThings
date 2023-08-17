import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './post.jsx'

const COHORT_NAME = '2305-ftb-mt-web-pt'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const returned = await fetch(`${BASE_URL}/posts`)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
