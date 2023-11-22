import Signin from "../forms/Signin";

function SigninPage({ test, setIsHalf }) {

    console.log('test', test, setIsHalf);

    setIsHalf(true);

    return (
        <>
            <div class="text-center">
                <img src="/images/logo.png" alt="logo" class="logo" />
            </div>

            <div class="text-center">
                <h3>Sign In</h3>
            </div>

            <Signin />
        </>
    );
}

export default SigninPage;