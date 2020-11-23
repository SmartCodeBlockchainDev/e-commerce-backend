const express = require('express');

const router = express.Router();
const { AuthValidator } = require('../validators');
const { AuthController } = require('../controllers');
const { AuthServices } = require('../services');
const asynError = require('../errors/asyncErrors');
const WitlabError = require('../errors/WitlabError');

router.post('/signup', [AuthValidator.createParentValidator], AuthController.create(AuthServices, asynError));
router.post('/login', [AuthValidator.createParentValidator], AuthController.login(AuthServices, asynError, WitlabError));

module.exports = router;
