# Entrega 1 - Backend II

## Descripción

Este proyecto es una API y aplicación web desarrollada con **Node.js**, **Express**, **MongoDB** y **Handlebars**. Permite la gestión de usuarios, productos y carritos de compras, implementando autenticación con JWT y roles de usuario (admin y user). De igual forma, integra el [proyecto del modulo I de Backend](https://github.com/Merl024/Backend_entrega2_Rivas)

## Características principales

- **Registro y login de usuarios** con almacenamiento seguro de contraseñas.
- **Autenticación y autorización** usando JWT y Passport.
- **Roles de usuario:**  
  - **User:** Puede ver su perfil y los productos de su(s) carrito(s).
  - **Admin:** Puede ver todos los productos de todos los carritos y acceder a un panel para registrar productos.
- **Gestión de productos y carritos** con operaciones CRUD.
- **Vistas dinámicas** usando Handlebars.
- **Manejo de sesiones** mediante cookies seguras.

## Estructura de carpetas

```
src/
│
├── app.js
├── config/
│   └── passport.config.js
├── models/
│   ├── user.model.js
│   ├── product.model.js
│   └── cart.model.js
├── routers/
│   ├── session.router.js
│   ├── user.views.routes.js
│   ├── product.router.js
│   ├── cart.router.js
│   └── views.router.js
├── utils.js
└── views/
    ├── profile.handlebars
    ├── login.handlebars
    ├── register.handlebars
    └── ...otros archivos de vista
```

## Especificaciones técnicas

- **Base de datos:** MongoDB (local o Atlas)
- **ORM:** Mongoose
- **Autenticación:** Passport + JWT
- **Vistas:** Express-Handlebars
- **Servidor:** Express.js

## Endpoints principales

- `POST /api/sessions/register` — Registro de usuario
- `POST /api/sessions/login` — Login de usuario
- `GET /api/sessions/current` — Devuelve los datos del usuario autenticado (requiere JWT)
- `GET /users` — Vista de perfil para usuarios normales (requiere login)
- `GET /users/admin` — Vista de perfil para administradores (requiere login y rol admin)
- `GET /realtimeproducts` — Vista para registrar productos (solo admin)

## Roles y vistas

- **User:**  
  - Accede a `/users`
  - Ve sus datos y productos de su(s) carrito(s)
- **Admin:**  
  - Accede a `/users/admin`
  - Ve todos los productos de todos los carritos
  - Puede registrar nuevos productos

## Autenticación y autorización

- El login genera un JWT que se guarda en una cookie segura.
- Las rutas protegidas usan Passport y estrategias JWT para validar el token.
- El middleware de autorización verifica el rol del usuario antes de permitir el acceso a rutas restringidas.

## Instalación y uso

1. Clona el repositorio.
2. Instala las dependencias:
    ```
    npm install
    ```
3. Configura tu base de datos MongoDB en el archivo `app.js` o usando variables de entorno.
4. Inicia el servidor:
    ```
    node src/app.js
    ```
5. Accede a la app en [http://localhost:8080](http://localhost:8080)

---

**Autor:**  
Melisa Rivas
Backend II - Coderhouse
