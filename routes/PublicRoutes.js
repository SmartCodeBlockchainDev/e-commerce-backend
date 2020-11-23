const express = require('express');
const { ItemService } = require('../services');
const { ItemController } = require('../controllers')
const asynError = require('../errors/asynError');


const router = express.Router();

// Auth
router.use(require('./AuthRoutes'));

router.get('/items',[], ItemController.fetchItems(ItemService,asynError))
router.get('/items',[], ItemController.retriveItem(ItemService,asynError))


module.exports = router;
