require('dotenv').config();
const fs = require('fs');

// copy the dist of the client
fs.cpSync('./client/dist', './public/', { recursive: true });

//
// sanity check before running the server
//

if (!process.env.MONGO_CONNECTION) {
    throw new Error('Variable MONGO_CONNECTION was not specified in .env file');
}

if (!process.env.JWT_SECRET) {
    throw new Error('Varabile JWT_SECRET was not specified in the .env file, you can generate one with "npm run generate-jwt"');
}

if (!process.env.JWT_COOKIE_EXPIRE) {
    throw new Error('Varabile JWT_COOKIE_EXPIRE was not specified in the .env file, consider using 604800000 as a default (7 days)');
}