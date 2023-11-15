const repository = require("./repository");
const { userSchema } = require("./schema");
const mongoose = require("mongoose");

function startMongoose()
{
    const uri = process.env.MONGO_CONNECTION;
    if (!uri) {
        throw new Error('Variable MONGO_CONNECTION was not specified in .env file');
    }

    mongoose.set('runValidators', true);
    mongoose.pluralize(null); // disable mongo pluralizing collections
    mongoose.connect(uri);

    repository.User = mongoose.model('users', userSchema);

    return mongoose;
}

module.exports = {
    startMongoose,
    repository
}