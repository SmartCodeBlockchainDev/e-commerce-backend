const express = require('express');

const router = express.Router();

// User
router.use(require('./UserRoutes'));
router.use(require('./ItemRoutes'));


module.exports = router;
