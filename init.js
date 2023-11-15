const fs = require('fs');

fs.cpSync('./client/dist', './public/', { recursive: true });