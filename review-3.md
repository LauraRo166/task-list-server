# Task List Server - Tu Centro de Control de Tareas Inteligente

## ¿Qué es mi producto y para qué sirve?

**Task List Server** es una solución completa y profesional para gestionar todas tus tareas y actividades del día a día. Funciona como tu asistente personal digital que no solo guarda tus pendientes, sino que también protege tu información con un sistema de seguridad de nivel empresarial.

Imagina tener una agenda inteligente que:
- Recuerda todo lo que necesitas hacer
- Te permite organizar tus tareas por estado (completadas o pendientes)
- Protege tu información con credenciales personales
- Funciona desde cualquier dispositivo conectado a internet

Este producto es el "corazón tecnológico" que puede conectarse con aplicaciones móviles, páginas web, asistentes de voz o cualquier sistema que necesite gestionar tareas. Es como tener un secretario virtual disponible las 24 horas del día, los 7 días de la semana.

### ¿Para quién es ideal?

| Tipo de Usuario | Beneficio Principal |
|-----------------|---------------------|
| **Profesionales** | Organiza reuniones, proyectos y entregables |
| **Estudiantes** | Controla tareas, exámenes y fechas de entrega |
| **Equipos de trabajo** | Gestiona proyectos con diferentes niveles de acceso |
| **Emprendedores** | Administra múltiples responsabilidades de forma ordenada |
| **Familias** | Coordina actividades del hogar y compromisos |

---

## ¿Cuáles son las funcionalidades más importantes y por qué los usuarios las usarían?

### **Sistema de Inicio de Sesión Seguro**
Tu información es privada y solo tú puedes acceder a ella. Al iniciar sesión con tu usuario y contraseña, el sistema te entrega un "pase digital" temporal que te identifica durante tu sesión. Este pase se renueva automáticamente para mantener tu cuenta siempre protegida.

**¿Por qué lo usarías?** Porque garantiza que nadie más pueda ver, modificar o eliminar tus tareas sin tu autorización.

### **Niveles de Acceso por Rol**
El sistema reconoce diferentes tipos de usuarios:
- **Usuarios regulares**: Pueden gestionar sus propias tareas
- **Administradores**: Tienen acceso a funciones avanzadas y estadísticas del sistema

**¿Por qué lo usarías?** Ideal para empresas o equipos donde cada persona debe tener permisos específicos según su responsabilidad.

### **Crear Tareas en Segundos**
Agregar una nueva tarea es tan simple como escribir lo que necesitas hacer. El sistema automáticamente:
- Le asigna un número de identificación único
- La marca como pendiente
- La guarda de forma segura

**¿Por qué lo usarías?** Porque nunca más olvidarás una tarea importante, y agregarlas toma menos de 5 segundos.

### **Ver Todas tus Tareas de un Vistazo**
Obtén una lista completa y organizada de todo lo que tienes pendiente y lo que ya completaste. El sistema te muestra cuántas tareas tienes en total para que siempre sepas tu carga de trabajo.

**¿Por qué lo usarías?** Para tener una visión clara de tu día y planificar mejor tu tiempo.

### **Buscar Tareas Específicas**
¿Necesitas encontrar una tarea en particular? Solo ingresa su número de identificación y obtén todos sus detalles al instante.

**¿Por qué lo usarías?** Cuando tienes muchas tareas, encontrar una específica debe ser rápido y fácil.

### **Filtrar por Estado**
Visualiza únicamente:
- **Tareas completadas**: Para ver todo lo que has logrado
- **Tareas pendientes**: Para enfocarte en lo que falta por hacer

**¿Por qué lo usarías?** Para concentrarte en lo que realmente importa o celebrar tu productividad.

### **Actualizar Tareas Fácilmente**
¿Cambió algo en tu tarea? Puedes:
- Modificar la descripción
- Marcarla como completada
- Actualizar solo lo que necesites sin afectar el resto

**¿Por qué lo usarías?** Porque los planes cambian, y tu gestor de tareas debe adaptarse contigo.

### **Eliminar lo que ya no Necesitas**
Mantén tu lista limpia eliminando tareas obsoletas o que ya no son relevantes.

**¿Por qué lo usarías?** Una lista ordenada te ayuda a mantener el enfoque y reduce el estrés visual.

### **Protección Inteligente contra Errores**
El sistema cuenta con múltiples capas de validación que te protegen:

| Situación | El sistema te avisa... |
|-----------|------------------------|
| Datos de inicio de sesión incorrectos | "Usuario o contraseña incorrectos" |
| Intentar acceder sin iniciar sesión | "Se requiere un token de autorización" |
| Crear tarea sin descripción | "La descripción es requerida" |
| Buscar con un ID inválido | "El ID debe ser un número positivo válido" |
| Filtrar con estado incorrecto | "El estado debe ser 'completed' o 'incomplete'" |
| Método de solicitud no permitido | "Método HTTP no permitido" |

**¿Por qué lo usarías?** Porque el sistema te guía amablemente cuando algo no está bien, en lugar de fallar sin explicación.

### **Panel de Administración**
Los administradores tienen acceso a estadísticas del sistema:
- Total de tareas en el sistema
- Cantidad de tareas completadas
- Cantidad de tareas pendientes

**¿Por qué lo usarías?** Para tener métricas claras del progreso y la productividad.

---

## ¿Qué tecnologías usaste y por qué?

### **Node.js - El Motor Potente**
Es la base sobre la que funciona todo el sistema. Permite procesar miles de solicitudes de manera rápida y eficiente. Es como tener un motor de auto deportivo: potente, confiable y listo para responder en milisegundos.

### **Express.js - El Organizador Inteligente**
Es el marco de trabajo que organiza todas las funciones del sistema. Actúa como un "director de orquesta" que asegura que cada solicitud llegue al lugar correcto y reciba la respuesta adecuada. Gracias a Express, el sistema es ordenado y fácil de mantener.

### **API REST - Comunicación Universal**
El sistema utiliza un estándar internacional llamado REST que permite:
- Comunicarse con cualquier tipo de aplicación (móvil, web, escritorio)
- Usar códigos de respuesta claros (200 = éxito, 404 = no encontrado, etc.)
- Organizar las operaciones de forma lógica y predecible

Es como hablar un "idioma universal" que cualquier aplicación del mundo puede entender.

### **JSON Web Token (JWT) - Tu Pase de Seguridad Digital**
Implementamos tecnología de tokens para la autenticación. Funciona así:
1. Inicias sesión con tu usuario y contraseña
2. Recibes un "pase digital" encriptado
3. Usas ese pase para acceder a funciones protegidas
4. El pase expira automáticamente para mayor seguridad

Es como la tarjeta de acceso de un edificio corporativo: identifica quién eres sin necesidad de mostrar tu identificación completa cada vez.

### **Variables de Entorno - La Caja Fuerte**
Las configuraciones sensibles (como claves secretas) se guardan en un lugar seguro que no se comparte públicamente. Es como tener una caja fuerte donde guardas las llaves más importantes del sistema.

### **Sistema Modular - Organización Profesional**
El código está organizado en módulos especializados:

| Módulo | Función |
|--------|---------|
| **Visualización** | Consultar y ver tareas |
| **Edición** | Crear, modificar y eliminar tareas |
| **Autenticación** | Iniciar sesión y gestionar tokens |
| **Rutas Protegidas** | Recursos que requieren autorización |
| **Middlewares** | Validaciones y seguridad |

Esta organización hace que el sistema sea más fácil de actualizar y escalar en el futuro.

### **Nodemon - Desarrollo Ágil**
Durante la creación del producto, utilizamos herramientas que permiten hacer mejoras de forma rápida y eficiente, garantizando un producto de alta calidad.

---

## Códigos de Respuesta - Comunicación Clara

El sistema utiliza códigos estándar para comunicarse contigo:

| Código | Significado     | Ejemplo |
|--------|-----------------|---------|
| **200** | Todo salió bien | Tarea actualizada correctamente |
| **201** | Creado con éxito | Nueva tarea agregada |
| **400** | Datos incorrectos | Falta la descripción de la tarea |
| **401** | No autorizado  | Necesitas iniciar sesión |
| **403** | Sin permisos  | No tienes acceso a esta función |
| **404** | No encontrado | La tarea que buscas no existe |

---

## Cómo Empezar a Usar el Sistema

1. **Inicia sesión** con tu usuario y contraseña
2. **Recibe tu token** (pase digital de acceso)
3. **Gestiona tus tareas**: crea, consulta, actualiza o elimina
4. **Filtra y organiza** según tus necesidades
5. **Cierra sesión** cuando termines (el token expira automáticamente)
