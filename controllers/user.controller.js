const { createUserJwtToken, Assert } = require('../utility');

const UserController = {
    async createUser(req, res, { User }) {
        let { name, email, password } = req.body;

        // normalize the email
        email = email.toLowerCase();

        Assert.userEmailExists(await User.findOne({ email }), email);

        const user = new User({
            email,
            name,
            password,
            created: new Date(),
            updated: new Date()
        });

        await user.save();

        const token = createUserJwtToken(user);
        res.cookie('access_token', token, { expire: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE) });

        return user;
    },
    async listUsers(req, res, { User }) {
        return await User.find({});
    },
    async fetchUser(req, res, { User }) {
        const { userId } = req.params;

        Assert.authorizedUserId(userId);

        return await User.findOne({
            _id: userId
        });
    },
    async updateUser(req, res, { User }) {
        const { userId } = req.params;
        const { name, email, password } = req.body;

        Assert.authorizedUserId(userId);

        const user = await User.findOne({ _id: userId });
        Assert.userExists(user);

        if (name) user.name = name;
        if (email) user.email = email;
        if (password) user.password = password;

        user.updated = new Date();

        return await user.save();
    },
    async deleteUser(req, res, { User }) {
        const { userId } = req.params;

        Assert.authorizedUserId(userId);

        return await User.deleteOne({
            _id: userId
        });
    },
};

module.exports = UserController;
