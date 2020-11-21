const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {
  ENUM_GENDER,
  ENUM_ROLE,
} = require('../utils/const');

const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ENUM_GENDER,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ENUM_ROLE,
    default: 'CUSTOMER',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

userSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, (errGenSalt, salt) => {
    if (errGenSalt) return next(errGenSalt);
    bcrypt.hash(user.password, salt, (errHash, hash) => {
      if (errHash) return next(errHash);
      user.password = hash;
      next();
      return true;
    });
    return true;
  });
  return true;
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
    return true;
  });
};

module.exports = mongoose.model('user', userSchema);
