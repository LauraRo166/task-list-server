// Usuarios predefinidos para autenticación
// En producción, estos usuarios deberían estar en una base de datos con contraseñas hasheadas
const users = [
    {
        id: 1,
        username: "admin",
        password: "admin123",
        role: "admin"
    },
    {
        id: 2,
        username: "user1",
        password: "password1",
        role: "user"
    },
    {
        id: 3,
        username: "user2",
        password: "password2",
        role: "user"
    }
];

module.exports = users;

