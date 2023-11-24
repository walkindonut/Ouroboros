import { Link } from "react-router-dom";

function Signup() {
    return (
        <form className="m-5">
            <div className="row mb-3">

                <label htmlFor="firstname" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" id="firstname" />
                </div>
                <div className="col-sm-5">
                    <input type="text" className="form-control" id="lastname" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" />
                </div>
            </div>

            <div className="mt-5 d-grid gap-2 col-6 mx-auto">
                <a className="btn btn-primary" type="button">Sign Up</a>
                <div>
                    <span className="me-1">Already have an account?</span>
                    <Link to="/">Sign In</Link>
                </div>
            </div>
        </form>
    );
}

export default Signup;