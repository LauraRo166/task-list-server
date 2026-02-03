const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const tasks = [
  { id: 123456, isCompleted: false, description: 'Walk the dog' },
  { id: 2, isCompleted: true,  description: 'Buy groceries' },
  { id: 3, isCompleted: false, description: 'Read a book' }
];

app.get('/', (req, res) => {
  res.json(tasks);
});

const server = app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

module.exports = server;