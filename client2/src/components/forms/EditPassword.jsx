function EditPassword() {
    return (
        <>
            <div class="text-center">
                <h3>Password</h3>
            </div>

            <form class="m-5">

                <div class="row mb-3">
                    <label for="inputPassword1" class="col-sm-2 col-form-label">New Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword1" />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="inputPassword2" class="col-sm-2 col-form-label">Confirm New Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword2" />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Old Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" />
                    </div>
                </div>

                <div class="mt-5 d-grid gap-2 col-6 mx-auto">

                    <button class="btn btn-primary" type="button">Save</button>
                </div>
            </form>
        </>
    );
}

export default EditPassword;