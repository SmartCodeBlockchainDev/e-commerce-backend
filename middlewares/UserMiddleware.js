const BackendError = require('../errors/BackendError');

module.exports = {
  isUserById: (service) => async (req, res, next) => {
    const { idUser } = req.params;
    const user = await service.findById(idUser);
    if (user) {
      req.user = user;
      return next();
    }
    return next(new BackendError('No existe el Usuario', 404));
  },
};
