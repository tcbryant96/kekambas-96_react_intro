import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Welcome {props.name} from {props.city}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                        <Link className="nav-link" to="/standings">
                            Standings
                        </Link>
                        {localStorage.token ? null :
                        <Link className="nav-link" to="/register">
                            Register
                        </Link>}
                        
                        {localStorage.token ? null:
                        <Link className="nav-link" to="/login">
                            Login
                        </Link>}
                        
                        {localStorage.token ? 
                        <Link className="nav-link" to="/posts">
    
                            Create A Post
                        </Link>:
                        null}
                        
                         {localStorage.token ?
                         <Link className="nav-link" onClick={props.logout} to="/login">
                            Logout
                        </Link>
                        : null}
                        

                        
                    </div>
                </div>
            </div>
        </nav>
    );
}
