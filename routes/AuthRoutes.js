const express = require('express');

const router = express.Router();
const { AuthValidator } = require('../validators');
const { AuthController } = require('../controllers');
const { AuthServices } = require('../services');
const asyncError = require('../errors/asyncError');
const WitlabError = require('../errors/WitlabError');

router.post('/signup', [AuthValidator.createParentValidator], AuthController.create(AuthServices, asyncError));
router.post('/login', [AuthValidator.createParentValidator], AuthController.login(AuthServices, asyncError, WitlabError));

module.exports = router;
