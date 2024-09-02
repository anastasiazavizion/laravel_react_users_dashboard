import {Link} from "react-router-dom";
import {useRef, useState} from "react";
import {useStateContext} from "../context/ContextProvider.jsx";

export default function Signup() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const [errors, setErrors] = useState(null);


    const {setUser, setToken} = useStateContext();

    const onSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }

        axios.post('/api/signup', payload).then(({data})=>{
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

    return (
        <form onSubmit={onSubmit}>
            <h1 className="title">Register new account</h1>
            <input ref={nameRef} placeholder="Name" type="text"/>
            <input ref={emailRef} placeholder="Email" type="email"/>
            <input ref={passwordRef} placeholder="Password" type="password"/>
            <input ref={passwordConfirmationRef} placeholder="Password confirmation" type="password"/>
            <button className="btn btn-block">Sign up</button>
            <p className="message">
                Already have an account? <Link to="/login">Sign in</Link>
            </p>
        </form>
    )
}
