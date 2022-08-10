
import React, {useState} from "react";
import Axios from 'axios'

const Login = () => {
    const [name, setName]= useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(e) {
        e.preventDefault()
        Axios.post('http://localhost:5000/api/login', { name, email, password }).then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error);
        })
    }

    return (
        <div className="app__wrapper">
            <h1 className="wrapper__title">Login</h1>
            <form action="" onSubmit={loginUser}>
                <input 
                type="text" 
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login    