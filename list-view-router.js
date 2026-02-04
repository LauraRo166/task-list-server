const express = require('express');
const router = express.Router();
const tasks = require('./data/tasks');

const validateIdParam = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            error: "Parámetro faltante",
            message: "El parámetro 'id' es requerido"
        });
    }

    const taskId = parseInt(id);
    if (isNaN(taskId)) {
        return res.status(400).json({
            error: "Parámetro inválido",
            message: "El parámetro 'id' debe ser un número válido"
        });
    }

    if (taskId <= 0) {
        return res.status(400).json({
            error: "Parámetro inválido",
            message: "El parámetro 'id' debe ser un número positivo mayor a 0"
        });
    }

    next();
};

const validateStatusParam = (req, res, next) => {
    const { status } = req.params;

    if (!status) {
        return res.status(400).json({
            error: "Parámetro faltante",
            message: "El parámetro 'status' es requerido"
        });
    }

    const allowedStatuses = ['completed', 'incomplete'];
    if (!allowedStatuses.includes(status.toLowerCase())) {
        return res.status(400).json({
            error: "Parámetro inválido",
            message: "El parámetro 'status' debe ser 'completed' o 'incomplete'",
            allowedValues: allowedStatuses
        });
    }

    next();
};

router.get('/tasks', (req, res) => {
    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks
    });
});

router.get('/tasks/filter/:status', validateStatusParam, (req, res) => {
    const status = req.params.status.toLowerCase();
    const isCompleted = status === 'completed';
    const filteredTasks = tasks.filter(t => t.isCompleted === isCompleted);

    res.status(200).json({
        success: true,
        filter: status,
        count: filteredTasks.length,
        data: filteredTasks
    });
});

router.get('/tasks/:id', validateIdParam, (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);

    if (!task) {
        return res.status(404).json({
            success: false,
            error: "Recurso no encontrado",
            message: `No se encontró ninguna tarea con el ID ${taskId}`
        });
    }

    res.status(200).json({
        success: true,
        data: task
    });
});

module.exports = router;