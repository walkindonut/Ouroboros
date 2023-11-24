import { NavLink } from "react-router-dom";
import Profile from "../forms/Profile";
import Password from "../forms/EditPassword"

function ProfilePage({ setIsHalf }) {

    setIsHalf(true);

    return (
        <>

            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true">Profile</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-password-tab" data-bs-toggle="pill" data-bs-target="#pills-password" type="button" role="tab" aria-controls="pills-password" aria-selected="false">Password</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-2fa-tab" data-bs-toggle="pill" data-bs-target="#pills-2fa" type="button" role="tab" aria-controls="pills-2fa" aria-selected="false">2FA</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                    <Profile />
                </div>
                <div className="tab-pane fade" id="pills-password" role="tabpanel" aria-labelledby="pills-password-tab" tabIndex="0">
                    <Password />
                </div>
                <div className="tab-pane fade" id="pills-2fa" role="tabpanel" aria-labelledby="pills-2fa-tab" tabIndex="0">...</div>
            </div>
        </>
    );

}
export default ProfilePage;