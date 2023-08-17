import { useState } from "react"

const COHORT_NAME = "2305-FTB-MT-WEB-PT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;


export default function Login(props) {
    const [username, setUsername] = useState ("")
    const [password, setPassword] = useState ("")

    async function logIn(event) {        
        event.preventDefault()
        console.log(username)
        try {
            const response = await fetch(`${BASE_URL}/users/login`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    user: {
                        username: username,
                        password: password,
                    }
                })
            })
            const result = await response.json()
            return result
        } catch(error) {
            console.log(error)
        }
    }

    

    return(
    <div>
        <form onSubmit = {logIn}>
            <label htmlFor = "username">Username: </label>
            <input 
                type = "text"
                placeholder= "Enter username" 
                id = "username"
                value = {username} onChange = {(event) => setUsername(event.target.value)}
            />
            <label htmlFor = "password">Password: </label>
            <input 
                type = "password"
                placeholder= "Enter password" 
                id = "password"
                value = {password} onChange = {(event) => setPassword(event.target.value)}
            />
            <button
                type = "submit"
                >Log in</button>
        </form>
        <button
             onClick = {props.onFormSwitch}
        >Don't have an account? Register here.</button>
    </div>
    )
}