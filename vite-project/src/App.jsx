import Login from "./components/Login"
<<<<<<< HEAD
import Logout from "./components/Logout"
=======
import Register from "./components/Register"

>>>>>>> 45066fbb3c7f72a71de94e902c42748c5ecef4a1
export default function App() {
  const [initialForm, setInitialForm] = useState ("login")

  const toggleForm = (formName) => {
    setInitialForm(formName)
  }

  return(
    <>
<<<<<<< HEAD
      <Login />
      <Logout/>
=======
      {
        initialForm === "login"? <Login onFormSwitch = {toggleForm}/> : <Register />
      }
>>>>>>> 45066fbb3c7f72a71de94e902c42748c5ecef4a1
    </>
  )
}