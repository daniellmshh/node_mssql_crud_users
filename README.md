# Api Nodejs with SQL Server

Este proyecto en Node.js utiliza Express para practicar el establecimiento de una conexión a una base de datos SQL y ejecutar stored procedures con múltiples parámetros. El enfoque principal del proyecto es el flujo de usuarios.

## Estructura del Proyecto

El proyecto está organizado en diferentes carpetas y archivos para facilitar la comprensión y el mantenimiento. A continuación, se detalla la estructura del proyecto:

### Controllers

#### `users/users.js`

Contiene funciones para operaciones relacionadas con usuarios, como crear, modificar, listar, obtener información y cambiar el estado de un usuario.

#### `users/spsUsers.js`

Contiene definiciones de procedimientos almacenados y las definiciones de los parámetros para los procedimientos almacenados relacionados con usuarios.

### Database

#### `sql`

Contiene scripts SQL para crear tablas y procedimientos almacenados necesarios para el ejercicio.

#### `connection.js`

Contiene la configuración del objeto para el pool de conexiones a la base de datos, funciones para conectar al pool, probar la conexión a la base de datos, ejecutar procedimientos almacenados con parámetros, cerrar el pool y funciones que capturan eventos de término de la aplicación para cerrar los pools abiertos.

### Helpers

#### `errorHandling.js`

Contiene funciones para manejar el resultado de los procedimientos almacenados y para manejar errores generales.

### Model

#### `server.js`

Contiene la clase que representa un servidor basado en Express. Aquí se crea la instancia del servidor, se configuran y aplican middlewares de la aplicación, se definen las rutas de la aplicación y se inicia el servidor para escuchar las conexiones entrantes.

### Routes

#### `users.js`

Contiene una instancia del Router y la configuración de los endpoints para el flujo de usuarios.

### Otros Archivos

#### `index.js`

Contiene la carga de las variables de entorno, crea una instancia de la clase Server e inicia el servidor.

#### `package.json` y `package-lock.json`

Archivos de configuración de npm que describen el proyecto y sus dependencias.

## Instrucciones para Ejecutar el Proyecto

1. Clona el repositorio: `git clone <URL_DEL_REPOSITORIO>`
2. En la raíz del proyecto, ejecuta `npm install` para instalar las dependencias.
3. Configura las variables de entorno necesarias.
4. Ejecuta el proyecto con `npm start`.
5. Visita `http://localhost:PUERTO` en tu navegador para interactuar con la aplicación.

## Variables de Entorno

Asegúrate de configurar las siguientes variables de entorno antes de ejecutar la aplicación:

- `MSSQL_SERVER`: Dirección del servidor SQL.
- `MSSQL_DB`: Nombre de la base de datos SQL.
- `MSSQL_USER_PROD`: Usuario para autenticación en producción.
- `MSSQL_PASSWORD_PROD`: Contraseña para autenticación en producción.
- `MSSQL_ENCRYPT`: Configuración de cifrado para la conexión a la base de datos.

## Notas Adicionales

Este proyecto proporciona una base para practicar el manejo de bases de datos SQL en una aplicación Node.js utilizando Express. Puedes adaptar y expandir este proyecto para satisfacer tus necesidades específicas de desarrollo y práctica.