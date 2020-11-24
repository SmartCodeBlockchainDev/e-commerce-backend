const express = require('express');
const { ItemService } = require('../services');
const { ItemController } = require('../controllers')
const asyncError = require('../errors/asyncError');

const router = express.Router();

// Auth
router.use(require('./AuthRoutes'));

// Items
router.get('/item', ItemController.fetchItems(ItemService, asyncError))
router.get('/item/:idItem', ItemController.retriveItem(ItemService, asyncError))


module.exports = router;
