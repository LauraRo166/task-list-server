const express = require('express');
const router = express.Router();
const tasks = require('./data/tasks');

router.get('/tasks', (req, res) => {
    res.json(tasks);
});

router.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);

    if (!task) {
        return res.status(404).json({ message: "Tarea no encontrada" });
    }

    res.json(task);
});

router.get('/tasks/filter/:status', (req, res) => {
    const status = req.params.status;

    if (status !== 'completed' && status !== 'incomplete') {
        return res.status(400).json({ message: "Status debe ser 'completed' o 'incomplete'" });
    }

    const isCompleted = status === 'completed';
    const filteredTasks = tasks.filter(t => t.isCompleted === isCompleted);

    res.json(filteredTasks);
});

module.exports = router;