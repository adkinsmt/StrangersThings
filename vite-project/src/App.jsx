import Login from "./components/Login"
import { useEffect, useState } from "react"


export default function App() {
  const [token, setToken] = useState (null)

  useEffect(() => {
    const generatedToken = localStorage.getItem("token")
    generatedToken ? setToken : null
  }, [])

  return(
    <>
      {
        !token? <Login setToken = {setToken}/>: 
        <h1>Welcome to Stanger's Things!</h1>
      }
    </>
  )
}