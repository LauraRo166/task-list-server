require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');
const authRouter = require('./auth-router');
const protectedRouter = require('./protected-router');
const tasks = require('./data/tasks');

const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'];

const validateHttpMethod = (req, res, next) => {
    if (!allowedMethods.includes(req.method)) {
        return res.status(405).json({
            error: "Método no permitido",
            message: `El método HTTP '${req.method}' no está permitido en este servidor`,
            allowedMethods: allowedMethods
        });
    }
    next();
};

app.use(validateHttpMethod);
app.use(express.json());

app.get('/', (req, res) => {
    res.json(tasks);
});

app.use('/api', listViewRouter);
app.use('/api', listEditRouter);
app.use('/auth', authRouter);
app.use('/protected', protectedRouter);

const server = app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
});

module.exports = server;