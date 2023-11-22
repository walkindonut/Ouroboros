import Signup from "../forms/Signup";

function SigninPage({ setIsHalf }) {

    setIsHalf(true);

    return (
        <>
            <div class="text-center">
                <img src="/images/logo.png" alt="logo" class="logo" />
            </div>

            <div class="text-center">
                <h3>Sign Up</h3>
            </div>

            <Signup />
        </>
    );
}

export default SigninPage;