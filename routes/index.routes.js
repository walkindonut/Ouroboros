const fs = require('fs').promises;
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/index', async (req, res, next) => {
  const html = await fs.readFile('./public/index.html');
  res.setHeader('content-type', 'text/html');
  res.send(html);
});

module.exports = router;
