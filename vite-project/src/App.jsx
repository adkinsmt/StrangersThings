import Login from "./components/Login"
import Register from "./components/Register"

export default function App() {
  const [initialForm, setInitialForm] = useState ("login")

  const toggleForm = (formName) => {
    setInitialForm(formName)
  }

  return(
    <>
      {
        initialForm === "login"? <Login onFormSwitch = {toggleForm}/> : <Register />
      }
    </>
  )
}