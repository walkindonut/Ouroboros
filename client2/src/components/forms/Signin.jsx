import { Link } from "react-router-dom";

function Signin() {
    return (
        <form class="m-5">
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" />
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" />
                </div>
            </div>

            <div class="mt-5 d-grid gap-2 col-6 mx-auto">
                <a class="btn btn-primary" type="button">Sign In</a>
                <div>
                    <span class="me-1">Need an account?</span>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </form>
    );
}

export default Signin;