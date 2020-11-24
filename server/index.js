const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const { errors } = require('celebrate');

const config = require('../config');
const BackendError = require('../errors/BackendError');
const errorMiddleware = require('../errors/errorMiddleware');

const app = express();

// const whitelist = process.env.WHITELIST.split(',');

// const corsOptions = {
//     origin: (origin, callback) => {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
// };

const { mongoURI } = config;
mongoose.connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'mongo connection error:'));

app.use(express.urlencoded({
    extended: true,
}));
console.log(mongoURI)
app.use(express.json({ limit: '5mb' }));

// app.use(cors(corsOptions));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server on!');
});

app.get('/docs', function(_, res) {
  res.sendFile(path.join(__dirname + '/docs.html'));
});

app.use('/api/v1', require('../routes'));

app.all('*', (req, res, next) => {
    next(new BackendError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errors());
app.use(errorMiddleware);

module.exports = app;
