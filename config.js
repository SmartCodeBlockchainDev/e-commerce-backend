const dotenv = require('dotenv');

dotenv.config();

const env = process.env.NODE_ENV || 'development'; // 'dev' or 'test' or 'production'
const SECRET_KEY = process.env.SECRET_KEY || 'clavesecretaparajwt';

const development = {
  mongoURI: `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@masterincoding.varwq.mongodb.net/ecommerce?retryWrites=true&w=majority`,
  SECRET_KEY,
};

const production = {
  mongoURI: `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@masterincoding.varwq.mongodb.net/ecommerce?retryWrites=true&w=majority`,
  SECRET_KEY,
};

const config = {
  development,
  production,
};

module.exports = config[env];
