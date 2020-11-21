const BackendError = require('./BackendError');
/* eslint-disable no-param-reassign */
const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack,
    });
};

const sendErrorProd = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
};

const handleCastErrorDB = (err) => {
    const message = `Invalid ${err.path}: ${err.value}`;
    return new BackendError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
    const message = `Duplicate field value: ${JSON.stringify(err.keyValue)}. Please use anothe value!`;
    return new BackendError(message, 400);
};

module.exports = (err, req, res, next) => {
    console.log(err);
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res);
    } else {
        let error = { ...err };
        if (error.name === 'CastError') error = handleCastErrorDB(error);
        if (error.code === 11000) error = handleDuplicateFieldsDB(error);

        sendErrorProd(error, res);
    }
};
