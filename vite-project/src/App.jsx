import { useState } from 'react'
import './index.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div id="container">
          <Link to="/home">Home</Link>
          <Link to="/post">Post</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
        </div>
      <div id="main-section">
        <Routes>
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/home" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
