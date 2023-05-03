# My Store - Backend app with Node.js and Express.js

## Development and Production environment config

### Steps to init:

1. Create package.json: `yarn init -y`

   **note**: install necessary "devDependencies", "dependencies"

2. Init git: `git init`

3. Node_modules: `yarn`

4. Create file: .gitignore

   https://www.toptal.com/developers/gitignore/

   keywords: _Node, Windows, Linux, macOS_

5. Create file: .editorcongif

   Download VSC extension: EditorConfig for VS Code

6. Create file: .eslintrc.json

7. Create file: index.js, and others

8. Run **nodemon**: `yarn run dev`

   or Run in **production mode**: `yarn run star`

### "devDependencies"

Development Depedencies.

`yarn add nameDevDependency -D`

- **Nodemon**: to up the development environment.
- **eslint-config-prettier**: eslint is to apply best practices, control code errors.
- **eslint-plugin-prettier**
- **prettier**: format docs.

**note**: se debe tener instalado la extensión "ESlint" en VSC to identify errors.

### "dependencies"

Production Depedencies.

`yarn add nameDependency`

- **express**: to create server.
- **@faker-js/faker**: fake APIs generator. https://github.com/faker-js/faker
- **@hapi/boom**: error handler. https://hapi.dev/module/boom/api/?v=9.1.4
- **joi**: data validator.
- **cors**: add CORS headers automaticaly to all HTTP responses.

## Theory

### RESTful API

Help make CRUD.

REST: Representational State Transfer. It is a convention to make web services.
The services communicate through the HTTP protocol.

- **HTTP protocol methods**: GET, PUT (and PATCH), POST, DELETE.

  PATCH accept part of info, but PUT needs all info to update.

### Routes

Also are wellknow as _**endpoints**_.

Types: dinamic and fixed. Fixed goes before a dinamic if they repeat main route (entity).

### Query params

Diferent params to obtain data.

limit, offset, size...

### Single Responsability Principle

Apply to class, files, methods.

Example: func sum only serves to sum, no more responsabilities.

### API versions

Its important to maintain the API code by versions.
Example: use api/v1 as global path.

_https:domain/api/v1/products_

### CRUD

POST, GET, PATCH, PUT, DELETE.

### HTTP CODES STATTUS CODE

- 100: informational responses

- 200: succesful responses

- 300: redirects

- 400: client errors

- 500: server errors

### Middlewares

Middlewares handle requests before they reach your final endpoint.

request -> middleware -> middleware -> middleware... -> response

TYPES:

- Middlewares for Errors
- Middlewares for data validation
- Middlewares for CORS
- more...
