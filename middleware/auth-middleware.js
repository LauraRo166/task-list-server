const jwt = require('jsonwebtoken');

// Middleware para verificar el token JWT
const verifyToken = (req, res, next) => {
    // Obtener el header de autorización
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({
            error: "Token no proporcionado",
            message: "Se requiere un token de autorización en el header 'Authorization'"
        });
    }

    // El formato esperado es "Bearer <token>"
    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
        return res.status(401).json({
            error: "Formato de token inválido",
            message: "El formato del token debe ser 'Bearer <token>'"
        });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({
            error: "Formato de token inválido",
            message: "El esquema de autenticación debe ser 'Bearer'"
        });
    }

    // Verificar el token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({
                    error: "Token expirado",
                    message: "El token ha expirado. Por favor, inicie sesión nuevamente"
                });
            }

            if (err.name === 'JsonWebTokenError') {
                return res.status(401).json({
                    error: "Token inválido",
                    message: "El token proporcionado no es válido"
                });
            }

            return res.status(401).json({
                error: "Error de autenticación",
                message: "No se pudo verificar el token"
            });
        }

        // Guardar la información del usuario decodificada en el request
        req.user = decoded;
        next();
    });
};

// Middleware opcional para verificar roles
const verifyRole = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                error: "No autenticado",
                message: "Debe autenticarse primero"
            });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                error: "Acceso denegado",
                message: "No tiene permisos para acceder a este recurso"
            });
        }

        next();
    };
};

module.exports = {
    verifyToken,
    verifyRole
};

