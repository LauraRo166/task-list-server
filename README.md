# task-list-server

Pequeño servidor en Express que devuelve un arreglo de tareas en formato JSON con sistema de autenticación JWT.

## Requisitos
- Node.js instalado (v16+ recomendado).

## Instalación
1. Clonar el repositorio
2. Instalar dependencias:

```bash 
npm install
```

3. Crear archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
JWT_SECRET=tu_secreto_super_seguro
JWT_EXPIRES_IN=1h
PORT=3000
```

## Ejecución en desarrollo (con `nodemon`)
El proyecto ya incluye `nodemon` como dependencia de desarrollo y un script `dev` en `package.json` que ejecuta `nodemon app.js`.

Arrancar el servidor en modo desarrollo:

```bash
npm run dev
```

Esto ejecuta `nodemon app.js` y reinicia el servidor automáticamente al detectar cambios.

## Ejecución con Node
Para ejecutar sin `nodemon`:

```bash
node app.js
```

## API Endpoints

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

### Rutas Protegidas (requieren token JWT)

Para acceder a estas rutas, incluye el header:
```
Authorization: Bearer <tu_token>
```

#### GET /protected/profile
Obtiene el perfil del usuario autenticado.

#### GET /protected/tasks
Obtiene las tareas (solo usuarios autenticados).

#### GET /protected/admin
Panel de administración (solo rol admin).

### Tareas (Rutas públicas)

#### GET /api/tasks
Lista todas las tareas.

#### GET /api/tasks/:id
Obtiene una tarea específica por ID.

#### GET /api/tasks/filter/:status
Filtra tareas por estado (`completed` o `incomplete`).

#### POST /api/tasks
Crea una nueva tarea.

**Request body:**
```json
{
  "description": "Nueva tarea",
  "isCompleted": false
}
```

#### PUT /api/tasks/:id
Actualiza una tarea existente.

#### DELETE /api/tasks/:id
Elimina una tarea.

## Estructura del Proyecto

```
task-list-server/
├── app.js                 # Punto de entrada
├── auth-router.js         # Rutas de autenticación
├── protected-router.js    # Rutas protegidas
├── list-view-router.js    # Rutas GET de tareas
├── list-edit-router.js    # Rutas POST/PUT/DELETE de tareas
├── middleware/
│   └── auth-middleware.js # Middleware de verificación JWT
├── data/
│   ├── tasks.js           # Datos de tareas
│   └── users.js           # Usuarios predefinidos
├── .env                   # Variables de entorno (no se sube a git)
└── package.json
```

## Notas
- El puerto y las rutas se configuran en `app.js`. Por defecto, abre `http://localhost:3000`.
- Para detener el servidor en la terminal: `Ctrl+C`.
- El archivo `.env` contiene el secreto JWT y no debe compartirse públicamente.
