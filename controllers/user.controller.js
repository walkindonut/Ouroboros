const repository = require('../database');

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

        // TO-DO:
        // implement JWT token creation

        // TO-DO:
        // also return the token
        return {
            token: '',
            user
        };
    },
    async listUsers(req, res, { User }) { 
        return await User.find({});
    },
    async fetchUser(req, res, { User }) { 
        // TO-DO: require jwt token

        const { userId } = req.params; 
        return await User.findOne({
            _id: userId
        });
    },
    async updateUser(req, res, { User }) { 
        // TO-DO: require jwt token

        const { userId } = req.params;
        const { name, email, password } = req.body;
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
        // TO-DO: require jwt token
        const { userId } = req.params;
        return await User.deleteOne({
            _id: userId 
        });
    },
};

module.exports = UserController;
