const express = require('express');
const router = express.Router();
const tasks = require('./data/tasks');

const validateTaskBody = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: "El cuerpo de la solicitud está vacío",
            message: "Debe proporcionar los datos de la tarea"
        });
    }

    const { description, isCompleted } = req.body;

    if (description === undefined || description === null) {
        return res.status(400).json({
            error: "Atributo faltante",
            message: "La descripción es requerida"
        });
    }

    if (typeof description !== 'string') {
        return res.status(400).json({
            error: "Información no válida",
            message: "La descripción debe ser una cadena de texto"
        });
    }

    if (description.trim() === '') {
        return res.status(400).json({
            error: "Información no válida",
            message: "La descripción no puede estar vacía"
        });
    }

    if (isCompleted !== undefined && typeof isCompleted !== 'boolean') {
        return res.status(400).json({
            error: "Información no válida",
            message: "isCompleted debe ser un valor booleano (true o false)"
        });
    }

    next();
};

const validateTaskUpdate = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: "El cuerpo de la solicitud está vacío",
            message: "Debe proporcionar los datos a actualizar"
        });
    }

    const { description, isCompleted } = req.body;

    if (description === undefined && isCompleted === undefined) {
        return res.status(400).json({
            error: "Atributos faltantes",
            message: "Debe proporcionar al menos 'description' o 'isCompleted' para actualizar"
        });
    }

    if (description !== undefined) {
        if (typeof description !== 'string') {
            return res.status(400).json({
                error: "Información no válida",
                message: "La descripción debe ser una cadena de texto"
            });
        }

        if (description.trim() === '') {
            return res.status(400).json({
                error: "Información no válida",
                message: "La descripción no puede estar vacía"
            });
        }
    }

    if (isCompleted !== undefined && typeof isCompleted !== 'boolean') {
        return res.status(400).json({
            error: "Información no válida",
            message: "isCompleted debe ser un valor booleano (true o false)"
        });
    }

    next();
};

router.post('/tasks', validateTaskBody, (req, res) => {
    const { description, isCompleted } = req.body;

    const newTask = {
        id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
        isCompleted: isCompleted || false,
        description: description.trim()
    };

    tasks.push(newTask);

    res.status(201).json({
        success: true,
        message: "Tarea creada exitosamente",
        data: newTask
    });
});

router.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);

    if (isNaN(taskId) || taskId <= 0) {
        return res.status(400).json({
            success: false,
            error: "Parámetro inválido",
            message: "El ID debe ser un número positivo válido"
        });
    }

    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({
            success: false,
            error: "Recurso no encontrado",
            message: `No se encontró ninguna tarea con el ID ${taskId}`
        });
    }

    const deletedTask = tasks.splice(taskIndex, 1)[0];

    res.status(200).json({
        success: true,
        message: "Tarea eliminada exitosamente",
        data: deletedTask
    });
});

router.put('/tasks/:id', validateTaskUpdate, (req, res) => {
    const taskId = parseInt(req.params.id);

    if (isNaN(taskId) || taskId <= 0) {
        return res.status(400).json({
            success: false,
            error: "Parámetro inválido",
            message: "El ID debe ser un número positivo válido"
        });
    }

    const { description, isCompleted } = req.body;
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({
            success: false,
            error: "Recurso no encontrado",
            message: `No se encontró ninguna tarea con el ID ${taskId}`
        });
    }

    tasks[taskIndex] = {
        ...tasks[taskIndex],
        description: description !== undefined ? description.trim() : tasks[taskIndex].description,
        isCompleted: isCompleted !== undefined ? isCompleted : tasks[taskIndex].isCompleted
    };

    res.status(200).json({
        success: true,
        message: "Tarea actualizada exitosamente",
        data: tasks[taskIndex]
    });
});

router.patch('/tasks/:id', validateTaskUpdate, (req, res) => {
    const taskId = parseInt(req.params.id);

    if (isNaN(taskId) || taskId <= 0) {
        return res.status(400).json({
            success: false,
            error: "Parámetro inválido",
            message: "El ID debe ser un número positivo válido"
        });
    }

    const { description, isCompleted } = req.body;
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({
            success: false,
            error: "Recurso no encontrado",
            message: `No se encontró ninguna tarea con el ID ${taskId}`
        });
    }

    if (description !== undefined) {
        tasks[taskIndex].description = description.trim();
    }
    if (isCompleted !== undefined) {
        tasks[taskIndex].isCompleted = isCompleted;
    }

    res.status(200).json({
        success: true,
        message: "Tarea actualizada parcialmente",
        data: tasks[taskIndex]
    });
});

module.exports = router;