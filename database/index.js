const mongoose = require("mongoose");
const repository = require("./repository");
const User = require("./models/user.model");
const Ticket = require("./models/ticket.model");

function startMongoose()
{
    const uri = process.env.MONGO_CONNECTION;
    if (!uri) {
        throw new Error('Variable MONGO_CONNECTION was not specified in .env file');
    }

    mongoose.set('runValidators', true);
    mongoose.pluralize(null); // disable mongo pluralizing collections
    mongoose.connect(uri);

    // assign all models to the repository
    Object.assign(repository, {
        User,
        Ticket
    });

    return mongoose;
}

module.exports = {
    startMongoose,
    repository
}