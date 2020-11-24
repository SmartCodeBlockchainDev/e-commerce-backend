const express = require('express');

const router = express.Router();
const { AuthValidator } = require('../validators');
const { UserController } = require('../controllers');
const { UserService } = require('../services');
const BackednError = require('../errors/BackendError');

const asyncError = require('../errors/asyncError');

router.post('/signup', [AuthValidator.signup], UserController.create(UserService, asyncError, BackednError));
router.post('/login', [AuthValidator.login], UserController.login(UserService, asyncError, BackednError));

module.exports = router;
