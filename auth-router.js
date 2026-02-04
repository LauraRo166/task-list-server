const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const users = require('./data/users');

const validateLoginBody = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: "El cuerpo de la solicitud está vacío",
            message: "Debe proporcionar username y password"
        });
    }

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            error: "Credenciales incompletas",
            message: "Debe proporcionar username y password"
        });
    }

    if (typeof username !== 'string' || typeof password !== 'string') {
        return res.status(400).json({
            error: "Datos inválidos",
            message: "Username y password deben ser cadenas de texto"
        });
    }

    next();
};

router.post('/login', validateLoginBody, (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({
            error: "Autenticación fallida",
            message: "Usuario o contraseña incorrectos"
        });
    }

    const payload = {
        id: user.id,
        username: user.username,
        role: user.role
    };

    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
    );

    res.json({
        message: "Autenticación exitosa",
        user: {
            id: user.id,
            username: user.username,
            role: user.role
        },
        token: token
    });
});

module.exports = router;

