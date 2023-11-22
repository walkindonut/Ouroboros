import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Nav() {
    const isLoggedIn = false;

    return (
        <nav class="navbar navbar-expand-md fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Ouroboros</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Tickets</a>
                        </li>
                    </ul>

                    <ul class="d-flex navbar-nav mb-2 mb-md-0">
                        {isLoggedIn ?
                            <>
                                <li class="nav-item">
                                    <a class="nav-link " href="#">
                                        <FontAwesomeIcon icon={['fas', 'user-circle']} className="me-2" />
                                        <span>Account</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <FontAwesomeIcon icon={['fas', 'sign-out']} className="me-2" />
                                        <span>Sign Out</span>
                                    </a>
                                </li>
                            </> :
                            <>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
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