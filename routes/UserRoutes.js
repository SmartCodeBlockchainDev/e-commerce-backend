const express = require('express');

const router = express.Router();
//const permit = require('../utils/permit');
const { UserMiddleware } = require('../middlewares');
const { UserValidator } = require('../validators');
const { UserController } = require('../controllers');
const { UserService } = require('../services');
// const asynError = require('../errors/asyncErrors');

// router.get('/user', UserController.find(UserService, asynError));
// router.get('/user/me', permit('ADMIN', 'CUSTOMER'), UserController.me(UserService, asynError));
// router.get('/user/:idUser', permit('ADMIN', 'CUSTOMER'), [UserMiddleware.isUserById(UserService)], UserController.findById());
// router.patch('/user/:idUser', permit('ADMIN', 'CUSTOMER'), [UserValidator.updateParentValidator, UserMiddleware.isUserById(UserService)], UserController.update(UserService, asynError));

module.exports = router;
