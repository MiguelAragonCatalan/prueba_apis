const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

app.use(morgan('dev'));
app.use(express.json());
const routes = require('../src/routes/index.routes');
const { axiosErrorHandler, generalErrorHandler } = require('../src/middlewares/errorHandler');
app.use('/api', routes);
app.use(axiosErrorHandler);
app.use(generalErrorHandler)
app.get('/', (req, res) => {
    res.send('Prueba de API con Node.js, acceso restringido');
});

const runServer = () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};


module.exports = { runServer };

