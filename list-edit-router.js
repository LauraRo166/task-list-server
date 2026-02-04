const express = require('express');
const router = express.Router();
const tasks = require('./data/tasks');

router.post('/tasks', (req, res) => {
    const { description, isCompleted } = req.body;

    if (!description) {
        return res.status(400).json({ message: "La descripción es requerida" });
    }

    const newTask = {
        id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
        isCompleted: isCompleted || false,
        description: description
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

router.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ message: "Tarea no encontrada" });
    }

    const deletedTask = tasks.splice(taskIndex, 1);
    res.json({ message: "Tarea eliminada", task: deletedTask[0] });
});

router.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { description, isCompleted } = req.body;
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ message: "Tarea no encontrada" });
    }

    tasks[taskIndex] = {
        ...tasks[taskIndex],
        description: description !== undefined ? description : tasks[taskIndex].description,
        isCompleted: isCompleted !== undefined ? isCompleted : tasks[taskIndex].isCompleted
    };

    res.json(tasks[taskIndex]);
});

module.exports = router;