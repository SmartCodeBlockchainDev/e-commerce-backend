module.exports = {
    fetchItems: (service, asyncError) => asyncError(async (req, res) => {
       let build = {};
      if(req.query.sku) build.sku = req.query.sku
      if(req.query.category) build.category = req.query.category
      if(req.query.name) build.product_name = {"$regex": req.query.name, "$options":"i"}
      console.log(build)
      const results = await service.queryGetItems(build)
      return res.status(200).json(results);
    }),
    retriveItem:(service, asyncError) => asyncError(async (req, res) => {
        const item = await service.getItemById(req.params.idItem);
        return res.status(200).json(item);
    }), 
  };
  