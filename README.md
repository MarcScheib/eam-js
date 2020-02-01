![Node CI](https://github.com/MarcScheib/eam-js/workflows/Node%20CI/badge.svg?branch=master)

# Enterprise Administration & Management

This repository contains a basic application to administrate and manage different topics of your company.

## Running the Application

This application is built and tested with NodeJS 12. Therefor, it is recommended to run the application with the same version.

It consists of two services: an API server and a basic HTTP server to provide the frontend.

### API Server

The `start:custom` script assumes you have create a custom environment file called `environment.custom.ts` in `apps/api/src/environments`. You can start the API server via:

```
npm run start:custom -- api
```

This serves the API at `http://localhost:3333/api`. In addition, a Swagger UI is avaible at `http://localhost:3333/docs` in development mode.

### Frontend

The frontend server is started as follows and depends on the API running as described above:

```
npm run start -- eam-js
```
