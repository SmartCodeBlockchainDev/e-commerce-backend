const express = require('express');

const router = express.Router();

const { UserMiddleware } = require('../middlewares');
const { UserValidator } = require('../validators');
const { UserController } = require('../controllers');
const { UserService } = require('../services');

const asyncError = require('../errors/asyncError');
const permit = require('../utils/permission');

router.get('/user', UserController.find(UserService, asyncError));
router.get('/user/me', permit('ADMIN', 'CUSTOMER'), UserController.me(UserService, asyncError));
router.get('/user/:idUser', permit('ADMIN', 'CUSTOMER'), [UserMiddleware.isUserById(UserService)], UserController.findById());
router.patch('/user/:idUser', permit('ADMIN', 'CUSTOMER'), [UserValidator.updateParentValidator, UserMiddleware.isUserById(UserService)], UserController.update(UserService, asyncError));

module.exports = router;
