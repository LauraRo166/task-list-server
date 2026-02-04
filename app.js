const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');
const tasks = require('./data/tasks');

app.use(express.json());

app.get('/', (req, res) => {
    res.json(tasks);
});

app.use('/api', listViewRouter);
app.use('/api', listEditRouter);

const server = app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
});

module.exports = server;