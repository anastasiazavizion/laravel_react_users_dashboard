import {Link} from "react-router-dom";
import {useRef, useState} from "react";
import {useStateContext} from "../context/ContextProvider.jsx";

export default function Login(){

    const emailRef = useRef();
    const passwordRef = useRef();

    const {setUser, setToken} = useStateContext();
    const [errors, setErrors] = useState(null);

    const onSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        axios.post('/api/login', payload).then(({data})=>{
            console.log(data.token);

            setToken(data.token);
            setUser(data.user);
        }).catch((error)=>{
            const response = error.response;
            if(response && response.status === 422){
                setErrors(response.data.errors);
                console.log(response.data.errors);
            }
        });
    }

    return(
        <form onSubmit={onSubmit}>
            <h1 className="title">Login into your account</h1>
            <input ref={emailRef} placeholder="Email" type="email"/>
            <input ref={passwordRef} placeholder="Password" type="password"/>
            <button className="btn btn-block">Login</button>
            <p className="message">
                Not Registered? <Link to="/signup">Signup</Link>
            </p>
        </form>
    )
}
