import Phone from "../components/Phone";
import React, {SyntheticEvent, useState} from 'react';
import {useRouter} from 'next/router';


const Login = () =>  {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();

    async function submitForm() {
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        }).then((t) => t.json())
        const token = res.token

        // if(token){
        //     await router.push('/')
        // }
    }


    return (
        <form>
            <input type="text" className="form-control" value={username} placeholder="Username" required
                onChange={e => setUsername(e.target.value)}/>
            <input type="password" className="form-control" value={password} placeholder="Password" required
                    onChange={e => setPassword(e.target.value)}/>
            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={submitForm}>Log in</button>
        </form>
    )
}

export default Login;