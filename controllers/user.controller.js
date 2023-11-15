const { createUserJwtToken, assert } = require('../utility');

const UserController = {
    async createUser(req, res, { User }) {
        let { name, email, password } = req.body;

        // normalize the email
        email = email.toLowerCase();

        if (await User.findOne({ email }))
            throw new Error(`A user with the email ${email} already exists.`);

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

        assert(() => userId == req.jwt._id, `Unauthorized to make requests on behalf of user id ${userId}`);

        return await User.findOne({
            _id: userId
        });
    },
    async updateUser(req, res, { User }) {
        const { userId } = req.params;
        const { name, email, password } = req.body;

        assert(() => userId == req.jwt._id, `Unauthorized to make requests on behalf of user id ${userId}`);

        const user = await User.findOne({ _id: userId });
        if (!user)
            throw new Error(`User with id ${userId} could not be found.`);

        if (name) user.name = name;
        if (email) user.email = email;
        if (password) user.password = password;

        user.updated = new Date();

        return await user.save();
    },
    async deleteUser(req, res, { User }) {
        const { userId } = req.params;

        assert(() => userId == req.jwt._id, `Unauthorized to make requests on behalf of user id ${userId}`);

        return await User.deleteOne({
            _id: userId
        });
    },
};

module.exports = UserController;
