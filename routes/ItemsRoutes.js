const express = require('express');

const router = express.Router();
const { ItemController } = require('../controllers');
const { ItemService } = require('../services');

const asyncError = require('../errors/asyncError');
const permit = require('../utils/permission');


router.post('/item', permit('ADMIN'), ItemController.create(ItemService, asyncError));

module.exports = router;
