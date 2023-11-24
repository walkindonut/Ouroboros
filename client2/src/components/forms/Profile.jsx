import { useReducer, useState } from "react";

function Profile() {

    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            <div className="text-center">
                <h3>Profile</h3>
            </div>

            <form className="m-5">
                <div className="row mb-3">

                    <label htmlFor="firstname" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-5">
                        <input type="text" className="form-control" id="firstname" defaultValue="jack" disabled={false}/>
                    </div>
                    <div className="col-sm-5">
                        <input type="text" className="form-control" id="lastname" defaultValue="red" disabled={false}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" defaultValue="asd@aol.com" disabled={false}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3"/>
                    </div>
                </div>

                <div className="mt-5 d-grid gap-2 col-6 mx-auto">

                    <button className="btn btn-primary" type="button">Save</button>
                </div>
            </form>
        </>
    );
}

export default Profile;