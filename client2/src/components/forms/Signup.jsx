import { Link } from "react-router-dom";

function Signup() {
    return (
        <form class="m-5">
            <div class="row mb-3">

                <label for="firstname" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="firstname" />
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="lastname" />
                </div>
            </div>
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
                <a class="btn btn-primary" type="button">Sign Up</a>
                <div>
                    <span class="me-1">Already have an account?</span>
                    <Link to="/">Sign In</Link>
                </div>
            </div>
        </form>
    );
}

export default Signup;