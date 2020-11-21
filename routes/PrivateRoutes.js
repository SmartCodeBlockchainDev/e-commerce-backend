const express = require('express');

const router = express.Router();

// User
router.use(require('./UserRoutes'));

// Items
router.use(require('./ItemsRoutes'));


module.exports = router;
