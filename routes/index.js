const express = require('express');
const checkToken = require('../middlewares/checkToken');

const router = express.Router();

// Public
router.use(require('./PublicRoutes'));

router.use(checkToken);
// Privates
router.use(require('./PrivateRoutes'));

module.exports = router;
