function EditPassword() {
    return (
        <>
            <div className="text-center">
                <h3>Password</h3>
            </div>

            <form className="m-5">

                <div className="row mb-3">
                    <label htmlFor="inputPassword1" className="col-sm-4 col-form-label">Password</label>
                    <div className="col-sm-8">
                        <input type="password" className="form-control" id="inputPassword1" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputPassword2" className="col-sm-4 col-form-label">Confirm Password</label>
                    <div className="col-sm-8">
                        <input type="password" className="form-control" id="inputPassword2" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Old Password</label>
                    <div className="col-sm-8">
                        <input type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>

                <div className="mt-5 d-grid gap-2 col-6 mx-auto">

                    <button className="btn btn-primary" type="button">Save</button>
                </div>
            </form>
        </>
    );
}

export default EditPassword;