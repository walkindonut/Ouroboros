import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

function Nav() {
    const isLoggedIn = false;

    return (
        <nav className="navbar navbar-expand-md fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Ouroboros</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/tickets">Tickets</NavLink>
                        </li>
                    </ul>

                    <ul className="d-flex navbar-nav mb-2 mb-md-0">
                        {isLoggedIn ?
                            <>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">
                                        <FontAwesomeIcon icon={['fas', 'user-circle']} className="me-2" />
                                        <span>Account</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <FontAwesomeIcon icon={['fas', 'sign-out']} className="me-2" />
                                        <span>Sign Out</span>
                                    </a>
                                </li>
                            </> :
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <FontAwesomeIcon icon={['fas', 'sign-in']} className="me-2" />
                                        <span>Sign In</span>
                                    </a>
                                </li>
                            </>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;