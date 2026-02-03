# task-list-server

Pequeño servidor en Express que devuelve un arreglo de tareas en formato JSON.

## Requisitos
- Node.js instalado (v16+ recomendado).

## Instalación
1. Instalar dependencias:

````bash 
npm install
````

## Ejecución en desarrollo (con `nodemon`)
El proyecto ya incluye `nodemon` como dependencia de desarrollo y un script `dev` en `package.json` que ejecuta `nodemon app.js`.

Arrancar el servidor en modo desarrollo:

````bash
npm run dev
````

Esto ejecuta `nodemon app.js` y reinicia el servidor automáticamente al detectar cambios.

## Ejecución con Node
Para ejecutar sin `nodemon`:

````bash
node app.js
````

## Notas
- El puerto y las rutas se configuran en `app.js`. Por defecto, abre `http://localhost:<puerto>` (p. ej. `3000`) según la configuración del servidor.
- Para detener el servidor en la terminal: `Ctrl+C`.