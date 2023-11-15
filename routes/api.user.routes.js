const express = require('express');
const { api } = require('./utility');
const UserController = require('../controllers/user.controller');

const router = express.Router();
router.post('/', api(UserController.createUser));
router.get('/', api(UserController.listUsers));
router.get('/:userId', api(UserController.fetchUser));
router.put('/:userId', api(UserController.updateUser));
router.delete('/:userId', api(UserController.deleteUser));

module.exports = router;
