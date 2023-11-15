const express = require('express');
const UserController = require('../controllers/user.controller');

const router = express.Router();
router.post('/', UserController.createUser);
router.get('/', UserController.listUsers);
router.get('/:userid', UserController.fetchUser);
router.put('/:userid', UserController.updateUser);
router.delete('/:userid', UserController.deleteUser);

module.exports = router;
