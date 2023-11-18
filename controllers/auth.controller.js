const { createUserJwtToken, Assert } = require('../utility');

const AuthController = {
    async signin(req, res, { User }) {
        let { email, password } = req.body;

        // normalize the email
        email = email.toLowerCase(); 

        const user = await User.findOne({
            email: email,
            password: password
        });

        Assert.userSignInExists(user);

        const token = createUserJwtToken(user);
        res.cookie('access_token', token, { expire: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE) });

        return user;
    },
    async signout(req, res) {
        res.clearCookie('access_token');
        return { success: true };
    }
};

module.exports = AuthController;
