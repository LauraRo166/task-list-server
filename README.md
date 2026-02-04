# Task List Server - API REST

## ¿Qué es mi producto y para qué sirve?

Task List Server es una solución completa para gestionar tus tareas diarias de forma sencilla y organizada. Es como tener un asistente personal digital que te ayuda a recordar todo lo que necesitas hacer, desde las tareas más pequeñas hasta los proyectos más importantes.

Con esta herramienta, puedes crear, organizar y dar seguimiento a todas tus actividades pendientes desde cualquier dispositivo, manteniendo tu vida organizada sin complicaciones.

## ¿Cuáles son las funcionalidades más importantes y por qué los usuarios las usarían?

### 📝 Crear tareas fácilmente
Añade nuevas tareas en segundos con solo escribir lo que necesitas hacer. No más notas perdidas o recordatorios olvidados.

### ✅ Marcar tareas como completadas
Siente la satisfacción de marcar como terminadas las tareas que has cumplido. El sistema guarda tu progreso automáticamente.

### 🔍 Filtrar por estado
Visualiza solo las tareas pendientes cuando necesites enfocarte, o revisa las completadas para ver todo lo que has logrado.

### 📋 Ver todas tus tareas
Obtén una vista completa de todo tu listado en un solo lugar, perfectamente organizado.

### ✏️ Editar tareas existentes
¿Cambió algo? Actualiza la descripción o el estado de cualquier tarea cuando lo necesites.

### 🗑️ Eliminar tareas
Borra las tareas que ya no son relevantes y mantén tu lista limpia y actualizada.

### 🔐 Seguridad con autenticación
Tu información está protegida. Solo tú puedes acceder a tus tareas con tu cuenta personal.

## ¿Qué tecnologías usaste y por qué?

Este producto fue creado pensando en la rapidez y confiabilidad:

- **Node.js**: Una plataforma reconocida mundialmente que permite que el sistema funcione de manera rápida y eficiente.
- **Express**: Un sistema probado que facilita la comunicación entre tu dispositivo y el servidor de forma segura.
- **JWT (Tokens de seguridad)**: Tecnología de protección que garantiza que solo tú puedas acceder a tu información.

---

## Requisitos Técnicos
- Node.js instalado (v16+ recomendado)

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash 
npm install
```

3. Crear archivo `.env` en la raíz del proyecto:

```env
JWT_SECRET=tu_secreto_super_seguro
JWT_EXPIRES_IN=1h
PORT=3000
```

## Ejecución

### Modo desarrollo (con `nodemon`)
```bash
npm run dev
```
Reinicia automáticamente el servidor al detectar cambios.

### Modo producción
```bash
node app.js
```

---

## API REST - Documentación Completa

### Códigos de Estado HTTP Utilizados

| Código | Significado | Uso |
|--------|-------------|-----|
| 200 | OK | Solicitud exitosa |
| 201 | Created | Recurso creado exitosamente |
| 400 | Bad Request | Datos inválidos o faltantes |
| 401 | Unauthorized | Autenticación requerida o fallida |
| 403 | Forbidden | Sin permisos para el recurso |
| 404 | Not Found | Recurso no encontrado |
| 405 | Method Not Allowed | Método HTTP no permitido |

---

### Autenticación

#### POST /auth/login
Inicia sesión y obtiene un token JWT.

**Request body:**
```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Usuarios predefinidos:**
| Usuario | Contraseña | Rol |
|---------|------------|-----|
| admin | admin123 | admin |
| user1 | password1 | user |
| user2 | password2 | user |

**Response exitoso (200):**
```json
{
  "message": "Autenticación exitosa",
  "user": {
    "id": 1,
    "username": "admin",
    "role": "admin"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response error (401):**
```json
{
  "error": "Autenticación fallida",
  "message": "Usuario o contraseña incorrectos"
}
```

---

### Gestión de Tareas (API Pública)

#### GET /api/tasks
Lista todas las tareas.

**Response (200):**
```json
{
  "success": true,
  "count": 4,
  "data": [
    { "id": 1, "isCompleted": false, "description": "Walk the dog" },
    { "id": 2, "isCompleted": true, "description": "Buy groceries" }
  ]
}
```

---

#### GET /api/tasks/:id
Obtiene una tarea específica por ID.

**Ejemplo:** `GET /api/tasks/1`

**Response exitoso (200):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "isCompleted": false,
    "description": "Walk the dog"
  }
}
```

**Response error (404):**
```json
{
  "success": false,
  "error": "Recurso no encontrado",
  "message": "No se encontró ninguna tarea con el ID 999"
}
```

**Response error (400):**
```json
{
  "error": "Parámetro inválido",
  "message": "El parámetro 'id' debe ser un número válido"
}
```

---

#### GET /api/tasks/filter/:status
Filtra tareas por estado.

**Parámetros válidos:** `completed` o `incomplete`

**Ejemplo:** `GET /api/tasks/filter/completed`

**Response (200):**
```json
{
  "success": true,
  "filter": "completed",
  "count": 2,
  "data": [
    { "id": 2, "isCompleted": true, "description": "Buy groceries" },
    { "id": 4, "isCompleted": true, "description": "Clean the house" }
  ]
}
```

**Response error (400):**
```json
{
  "error": "Parámetro inválido",
  "message": "El parámetro 'status' debe ser 'completed' o 'incomplete'",
  "allowedValues": ["completed", "incomplete"]
}
```

---

#### POST /api/tasks
Crea una nueva tarea.

**Request body:**
```json
{
  "description": "Nueva tarea",
  "isCompleted": false
}
```

**Response exitoso (201):**
```json
{
  "success": true,
  "message": "Tarea creada exitosamente",
  "data": {
    "id": 5,
    "isCompleted": false,
    "description": "Nueva tarea"
  }
}
```

**Response error (400) - Cuerpo vacío:**
```json
{
  "error": "El cuerpo de la solicitud está vacío",
  "message": "Debe proporcionar los datos de la tarea"
}
```

**Response error (400) - Atributo faltante:**
```json
{
  "error": "Atributo faltante",
  "message": "La descripción es requerida"
}
```

---

#### PUT /api/tasks/:id
Actualiza una tarea existente (actualización completa).

**Ejemplo:** `PUT /api/tasks/1`

**Request body:**
```json
{
  "description": "Tarea actualizada",
  "isCompleted": true
}
```

**Response exitoso (200):**
```json
{
  "success": true,
  "message": "Tarea actualizada exitosamente",
  "data": {
    "id": 1,
    "isCompleted": true,
    "description": "Tarea actualizada"
  }
}
```

**Response error (404):**
```json
{
  "success": false,
  "error": "Recurso no encontrado",
  "message": "No se encontró ninguna tarea con el ID 999"
}
```

---

#### PATCH /api/tasks/:id
Actualización parcial de una tarea.

**Ejemplo:** `PATCH /api/tasks/1`

**Request body (solo campos a actualizar):**
```json
{
  "isCompleted": true
}
```

**Response exitoso (200):**
```json
{
  "success": true,
  "message": "Tarea actualizada parcialmente",
  "data": {
    "id": 1,
    "isCompleted": true,
    "description": "Walk the dog"
  }
}
```

---

#### DELETE /api/tasks/:id
Elimina una tarea.

**Ejemplo:** `DELETE /api/tasks/1`

**Response exitoso (200):**
```json
{
  "success": true,
  "message": "Tarea eliminada exitosamente",
  "data": {
    "id": 1,
    "isCompleted": false,
    "description": "Walk the dog"
  }
}
```

**Response error (404):**
```json
{
  "success": false,
  "error": "Recurso no encontrado",
  "message": "No se encontró ninguna tarea con el ID 999"
}
```

---

### Rutas Protegidas (requieren token JWT)

Para acceder a estas rutas, incluye el header:
```
Authorization: Bearer <tu_token>
```

#### GET /protected/profile
Obtiene el perfil del usuario autenticado.

**Response (200):**
```json
{
  "message": "Acceso autorizado a ruta protegida",
  "user": {
    "id": 1,
    "username": "admin",
    "role": "admin"
  }
}
```

#### GET /protected/tasks
Obtiene las tareas (solo usuarios autenticados).

#### GET /protected/admin
Panel de administración (solo rol admin).

**Response error (401) - Sin token:**
```json
{
  "error": "Token no proporcionado",
  "message": "Se requiere un token de autorización en el header 'Authorization'"
}
```

**Response error (403) - Sin permisos:**
```json
{
  "error": "Acceso denegado",
  "message": "No tiene permisos para acceder a este recurso"
}
```

---

## Estructura del Proyecto

```
task-list-server/
├── app.js                 # Punto de entrada principal
├── auth-router.js         # Rutas de autenticación (/auth)
├── protected-router.js    # Rutas protegidas con JWT (/protected)
├── list-view-router.js    # Rutas GET de tareas (/api)
├── list-edit-router.js    # Rutas POST/PUT/PATCH/DELETE de tareas (/api)
├── middleware/
│   └── auth-middleware.js # Middleware de verificación JWT
├── data/
│   ├── tasks.js           # Datos de tareas (almacenamiento en memoria)
│   └── users.js           # Usuarios predefinidos
├── .env                   # Variables de entorno
├── .gitignore             # Archivos ignorados por Git
└── package.json           # Dependencias y scripts
```

## Notas Importantes

- El servidor corre por defecto en `http://localhost:3000`
- Para detener el servidor: `Ctrl+C`
- El archivo `.env` contiene el secreto JWT y no debe compartirse públicamente
- Los datos se almacenan en memoria, se reinician al reiniciar el servidor
