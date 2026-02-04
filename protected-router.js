const express = require('express');
const router = express.Router();
const { verifyToken, verifyRole } = require('./middleware/auth-middleware');
const tasks = require('./data/tasks');

router.get('/profile', verifyToken, (req, res) => {
    res.json({
        message: "Acceso autorizado a ruta protegida",
        user: {
            id: req.user.id,
            username: req.user.username,
            role: req.user.role
        }
    });
});

router.get('/tasks', verifyToken, (req, res) => {
    res.json({
        message: "Tareas obtenidas exitosamente",
        user: req.user.username,
        tasks: tasks
    });
});

router.get('/admin', verifyToken, verifyRole('admin'), (req, res) => {
    res.json({
        message: "Bienvenido al panel de administración",
        user: {
            id: req.user.id,
            username: req.user.username,
            role: req.user.role
        },
        adminInfo: {
            totalTasks: tasks.length,
            completedTasks: tasks.filter(t => t.isCompleted).length,
            pendingTasks: tasks.filter(t => !t.isCompleted).length
        }
    });
});

module.exports = router;

