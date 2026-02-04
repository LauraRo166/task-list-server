# Task List Server - Tu Gestor de Tareas Simplificado

## ¿Qué es mi producto y para qué sirve?

**Task List Server** es una aplicación diseñada para ayudarte a organizar tu día a día de manera sencilla y eficiente. Imagina tener un asistente personal que guarda todas tus tareas pendientes, te permite consultarlas en cualquier momento, marcarlas como completadas o eliminarlas cuando ya no las necesites.

Este producto funciona como el "cerebro" detrás de cualquier aplicación de lista de tareas. Ya sea que uses una aplicación móvil, una página web o cualquier otro programa, **Task List Server** se encarga de guardar y gestionar toda la información de tus tareas de forma segura y organizada.

Ahora con **autenticación de usuarios**, solo las personas autorizadas pueden acceder a ciertas funciones del sistema, garantizando la privacidad y seguridad de tu información.

Es ideal para:
- Personas que desean mantener un registro de sus actividades diarias
- Equipos de trabajo que necesitan gestionar tareas compartidas
- Profesionales que requieren organizar sus pendientes de manera eficiente
- Estudiantes que quieren llevar control de sus asignaciones
- Empresas que necesitan control de acceso y seguridad en sus sistemas

---

## ¿Cuáles son las funcionalidades más importantes y por qué los usuarios las usarían?

### **🔐 Sistema de Autenticación Seguro**
Inicia sesión con tu usuario y contraseña para obtener acceso al sistema. El servidor genera un "pase de seguridad" (token) que te identifica durante tu sesión. Este pase tiene fecha de vencimiento, lo que significa que tu cuenta está protegida incluso si alguien intenta usar un pase antiguo.

### **🛡️ Rutas Protegidas**
Ciertas funciones del sistema están protegidas y solo pueden ser accedidas por usuarios autenticados. Además, algunas áreas están reservadas exclusivamente para administradores, garantizando diferentes niveles de acceso según el rol del usuario.

### **Crear nuevas tareas**
Agrega tareas con solo escribir una descripción. El sistema automáticamente le asigna un identificador único y la marca como pendiente. ¡Nunca más olvidarás lo que tienes que hacer!

### **Ver todas tus tareas**
Consulta tu lista completa de tareas en cualquier momento. Obtén una vista general de todo lo que tienes pendiente y lo que ya has completado.

### **Buscar una tarea específica**
¿Necesitas ver los detalles de una tarea en particular? Simplemente búscala por su identificador y obtén toda su información al instante.

### **Filtrar por estado**
Visualiza únicamente las tareas completadas o las que aún están pendientes. Esta función te ayuda a enfocarte en lo que realmente importa o a celebrar todo lo que ya has logrado.

### **Actualizar tareas**
¿Cambió la descripción de tu tarea? ¿Quieres marcarla como completada? Modifica cualquier tarea existente con facilidad.

### **Eliminar tareas**
Borra las tareas que ya no necesitas para mantener tu lista limpia y organizada.

### **Protección contra errores**
El sistema cuenta con **validaciones inteligentes** que te protegen de cometer errores:

- **Validación de credenciales**: Si intentas iniciar sesión con datos incorrectos, el sistema te informará que las credenciales no son válidas.
- **Validación de token**: Si intentas acceder a una ruta protegida sin un pase válido, recibirás un mensaje indicando el problema.
- **Validación de datos**: Si intentas crear una tarea sin descripción o con información incorrecta, el sistema te avisará amablemente qué debes corregir.
- **Validación de parámetros**: Si buscas una tarea con un identificador inválido o filtras con un estado incorrecto, recibirás un mensaje claro indicando el problema.
- **Validación de solicitudes**: El sistema solo acepta tipos de solicitudes válidas, protegiéndote de operaciones no permitidas.

---

## ¿Qué tecnologías usaste y por qué?

### **Node.js**
Utilizamos Node.js como base de nuestra aplicación. Es una tecnología moderna, rápida y confiable que permite que el servidor responda a miles de solicitudes de manera eficiente. Es como tener un motor potente que nunca se cansa.

### **Express.js**
Express es el marco de trabajo que organiza toda la lógica de nuestra aplicación. Piensa en él como el "director de tráfico" que se asegura de que cada solicitud llegue al lugar correcto y reciba la respuesta adecuada.

### **JSON Web Token (JWT)**
Implementamos JWT para la autenticación de usuarios. Piensa en un JWT como una credencial digital encriptada que demuestra quién eres sin necesidad de enviar tu contraseña en cada solicitud. Es como mostrar tu identificación en la entrada de un edificio: una vez verificada, puedes moverte libremente por las áreas permitidas.

### **Variables de Entorno con dotenv**
Las configuraciones sensibles (como claves secretas) se guardan de forma segura en archivos especiales que no se comparten públicamente. Es como tener una caja fuerte para guardar las llaves del sistema.

### **Sistema Modular con Routers**
Organizamos el código en módulos separados para:
- **Visualización**: Todo lo relacionado con consultar y ver tareas
- **Edición**: Todo lo relacionado con crear, modificar y eliminar tareas
- **Autenticación**: Todo lo relacionado con iniciar sesión y generar tokens
- **Rutas Protegidas**: Recursos que requieren autenticación para acceder

Esta organización hace que el sistema sea más fácil de mantener y actualizar en el futuro.

### **Middlewares de Seguridad**
Implementamos capas de protección (middlewares) que verifican:
- Que toda la información que ingresa al sistema sea correcta y segura
- Que los usuarios estén autenticados antes de acceder a recursos protegidos
- Que los usuarios tengan los permisos adecuados según su rol

Es como tener guardias de seguridad que revisan todo antes de dejarlo pasar.

### **Nodemon para Desarrollo**
Durante el desarrollo utilizamos Nodemon, una herramienta que reinicia automáticamente el servidor cuando hacemos cambios. Esto acelera el proceso de mejora continua del producto.

---

## Resumen de Beneficios

| Beneficio | Descripción |
|---------|-------------|
| **Seguro** | Autenticación con JWT y validaciones que protegen la integridad de tus datos |
| **Privado** | Control de acceso basado en roles (usuario/administrador) |
| **Rápido** | Respuestas instantáneas a todas tus solicitudes |
| **Flexible** | Compatible con cualquier aplicación que necesite gestionar tareas |
| **Organizado** | Código modular fácil de mantener y escalar |
| **Claro** | Mensajes de error descriptivos que te guían |

---

## Cómo funciona la autenticación

1. **Inicias sesión** enviando tu usuario y contraseña
2. **Recibes un token** (tu pase digital) válido por tiempo limitado
3. **Usas el token** en cada solicitud a rutas protegidas
4. **El sistema verifica** que tu pase sea válido antes de darte acceso
5. **Si el pase expira**, simplemente vuelves a iniciar sesión
