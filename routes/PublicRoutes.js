const express = require('express');

const router = express.Router();

// Auth
router.use(require('./AuthRoutes'));

module.exports = router;
