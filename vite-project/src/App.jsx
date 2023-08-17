import Login from "./components/Login"
import Logout from "./components/Logout"
export default function App() {
  const [initialForm, setInitialForm] = useState ("login")

  const toggleForm = (formName) => {
    setInitialForm(formName)
  }

  return(
    <>
      <Login />
      <Logout/>
    </>
  )
}