const { Item } = require('../models');
const BackendError = require('../errors/BackendError');

module.exports = {
  
    allItems: () => Item.find({})
                    .then(items => items)
                    .catch(err => { throw new BackendError(err); }),
    getItemBySKU: (sku)  => Item.findOne({sku})
                        .then(item => item)
                        .catch(err => { throw new BackendError(err); }),
    getItemsByCategory: category => Item.findOne({category})
                                        .then(items =>items)
                                        .catch(err => { throw new BackendError(err); }),
    getItemByProductName: name => Item.find({'product_name':{'$regex':`%${name}%`}})
                                        .then(items =>items)
                                        .catch(err => { throw new BackendError(err); }),
    getItemById: _id => Item.findOne({_id})
                            .then(item => item)
                            .catch(err => { throw new BackendError(err); }),
    queryGetItems: query => Item.find({...query})
                                .then(items =>items)
                                .catch(err => { throw new BackendError(err); }),
    createItem: item => Item.create(item)
                            .then(item => item)
                            .catch(err => { throw new BackendError(err); }),
                            
                                    
    

};
