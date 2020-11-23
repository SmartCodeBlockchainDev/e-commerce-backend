
module.exports = {
  create: (service, asyncError) => asyncError(async (req, res) => {
    const newUser = await service.create(req.body);
    return res.status(200).json(newUser);
  }),

  login: (service, asyncError, BackendError) => asyncError(async (req, res, next) => {
    const user = await service.findByEmail(req.body.email);
    if (user) {
      const isMatch = await service.validatePassword(user, req.body.password);
      if (isMatch) {
        const token = service.generateToken(user);
        return res.status(200).send({ token, role: user.role });
      }
      return next(new BackendError('Password incorrecto', 400));
    }
    return next(new BackendError('No existe el email', 400));
  }),

  find: (service, asyncError, BackendError) => asyncError(async (req, res, next) => {
    const users = await service.find();
    if (users) {
      return res.status(200).send({ users });
    }
    return next(new BackendError('No hay usuarios', 404));
  }),

  findById: () => (req, res) => res.status(200).json(req.user),

  update: (service, asyncError) => asyncError(async (req, res) => {
    const userUpdated = await (
      await service.updateById(req.params.idUser, req.body)
    ).toObject();
    delete userUpdated.password;
    return res.status(200).json(userUpdated);
  }),

  me: (service, asyncError) => asyncError(async (req, res) => {
    const user = await (
      await service.findById(req.decoded.id)
    ).toObject();
    delete user.password;
    res.send({ user, role: req.decoded.role });
  }),
};
