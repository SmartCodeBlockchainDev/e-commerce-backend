const express = require('express');

const router = express.Router();

// User
router.use(require('./UserRoutes'));

module.exports = router;
