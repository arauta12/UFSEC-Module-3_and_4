const { logEvents } = require('./logEvents')

const erroHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}`, 'errorLog.txt');
    console.error(err.stack);
    res.status(500).send(err.message);
};

module.exports = erroHandler;