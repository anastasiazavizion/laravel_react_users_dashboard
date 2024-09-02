import {Link} from "react-router-dom";

export default function Login(){

    const onSubmit = (ev) => {
        ev.preventDefault();


    }

    return(
                <form onSubmit={onSubmit}>
                    <h1 className="title">Login into your account</h1>
                    <input placeholder="Email" type="text"/>
                    <input placeholder="Password" type="password"/>
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not Registered? <Link to="/signup">Signup</Link>
                    </p>
                </form>
    )
}
