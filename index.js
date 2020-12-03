const server = require('./server');

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server on ${PORT}`);
});
