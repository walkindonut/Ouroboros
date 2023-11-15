const express = require('express');
const { api } = require('./utility');
const AuthController = require('../controllers/auth.controller');

const router = express.Router();
router.post('/signin', api(AuthController.signin));
router.get('/signout', api(AuthController.signout));

module.exports = router;
