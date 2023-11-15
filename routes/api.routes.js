const express = require('express');
const router = express.Router();
const controller = require('../controllers/api.controller');

// always set json header in this router
router.use((req, res, next) => {
    res.setHeader('content-type', 'application/json');
    next();
});

router.get('/test', controller.test);

module.exports = router;