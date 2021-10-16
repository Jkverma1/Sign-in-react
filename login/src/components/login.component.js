import React, { Component } from "react";
import SignUp from "./signup.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
            <form className="main-form">
                <div className="border"></div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control mainLoginInput" placeholder="&#xf0e0; enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control mainLoginInput" placeholder="&#61475; Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <div className="remember-me">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                        <label className="custom-control-label" htmlFor="customCheck1">Forgot Password</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Log In</button>
                <p>Don't have an account? <Link className="Signup-link" to={"/sign-up"}>Sign up</Link></p>
                
            </form>
        );
    }
}
