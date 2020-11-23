const express = require('express');
const { ItemService } = require('../services');
const { ItemController } = require('../controllers')
const asyncError = require('../errors/asyncError');

const router = express.Router();

// Auth
router.use(require('./AuthRoutes'));

router.get('/items', [], ItemController.fetchItems(ItemService, asyncError))
router.get('/items', [], ItemController.retriveItem(ItemService, asyncError))


module.exports = router;
