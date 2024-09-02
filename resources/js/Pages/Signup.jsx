import {Link} from "react-router-dom";

export default function Signup(){

    const onSubmit = (ev) => {
        ev.preventDefault();
    }

    return(
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Register new account</h1>
                    <input placeholder="Name" type="text"/>
                    <input placeholder="Email" type="text"/>
                    <input placeholder="Password" type="password"/>
                    <input placeholder="Password confirmation" type="password_confirmation"/>
                    <button className="btn btn-block">Sign up</button>
                    <p className="message">
                       Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
