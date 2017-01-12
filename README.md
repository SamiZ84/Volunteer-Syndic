# Volunteer-Syndic
Volunteer-Syndic est une solution facile pour la gestion de copropriétés gérées en syndic bénévole.
Application crée à partir du sid Angular2 MEAN:

Durant cet exercice, j'ai essayé les nouvelles technologies Angular 2, NodeJS, ExpressJS, Mongoose et MongoDB.
J'ai essayé de suivre une certaine logique fonctionnelle.

Coté composant graphique, j'ai intégré la bibliothèque Kendo UI avec Angular2 avec systemjs
http://www.telerik.com/kendo-angular-ui/

## [ Angular2 Updated to 2.1.0 ]
# Angular2 MEAN - QuickStart application with ExpressJS, MongoDB, Gulp and Typescript (Repository Pattern)

[![Build status](https://ci.appveyor.com/api/projects/status/y7cp312hef8sju0w/branch/master?svg=true)](https://ci.appveyor.com/project/moizKachwala/angular2-express-mongo-gulp-node-typescript/branch/master)
[![Gitter](https://badges.gitter.im/moizKachwala/Angular2-express-mongo-gulp-node-typescript.svg)](https://gitter.im/moizKachwala/Angular2-express-mongo-gulp-node-typescript?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/moizkachwala/Angular2-express-mongo-gulp-node-typescript.svg)](https://david-dm.org/moizkachwala/Angular2-express-mongo-gulp-node-typescript)
[![devDependency Status](https://david-dm.org/moizkachwala/Angular2-express-mongo-gulp-node-typescript/dev-status.svg)](https://david-dm.org/moizkachwala/Angular2-express-mongo-gulp-node-typescript#info=devDependencies)

##Introduction

Basic Angular seed application created with Quick start application (Tour of Heroes) given on angular website. It uses ExpressJS along with Mongo DB support (Mongoose) via a wrapper of Repository Pattern as Business layer.
It also uses Gulp for running task and TsLint.The seed application is built over node and uses latest node packages.

## [https://angular2-express-mongoose.herokuapp.com/](https://angular2-express-mongoose.herokuapp.com/)

## Prerequisites

1. Latest version of Node to be installed.
2. Install MongoDB and make sure it is running on default port 27017 (if not then please configure constants.ts and change the connection for mongoDB).

## Global packages
```
    npm install ts-node -g
    npm install typescript-node -g
```

## Steps to Run
```sh
    npm install          <= install all the npm Dependencies
    npm run build        <= build and compile the dest folder
    npm run deploy       <= start the Nodemon and watch for changes.
```

## Directory Structure

```
angular2-MEAN
    ├── node_modules
    ├── client
    │    ├── app
    │    │    ├── Components
    │    │    │    ├── acceuil
    │    │    │    │    ├── acceuil.component.css
    │    │    │    │    ├── acceuil.component.html
    │    │    │    │    ├── acceuil.component.ts
    │    │    │    ├── appartmentDetail
    │    │    │    │    ├── appartmentDetail.component.css
    │    │    │    │    ├── appartmentDetail.component.html
    │    │    │    │    ├──appartmentDetail.component.ts    
    │    │    │    ├── appartments
    │    │    │    │    ├── appartments.component.css
    │    │    │    │    ├── appartments.component.html
    │    │    │    │    ├── appartments.component.ts    
    │    │    │    ├── ...    
    │    │    ├── guards
    │    │    │    ├── authGuard.ts
    │    │    ├── models
    │    │    │    ├── appartmentVm.ts
    │    │    │    ├── accountVm.ts
    │    │    │    ├── ...
    │    │    ├── services
    │    │    │    ├── account.service.ts               <= Account Service for fetching api
    │    │    │    ├── appartment.service.ts            <= appartment Service for fetching api
    │    │    │    ├── ...
    │    │    ├── app.component.css
    │    │    ├── app.component.ts
    │    │    ├── app.html
    │    │    ├── app.module.ts
    │    │    ├── app.routing.ts
    │    │    ├── main.ts
    │    ├── typings
    │    ├── index.html
    │    │    ├── systemjs.config.js
    │    ├── tsconfig.json
    │    ├── typings.json
    ├── server
    │    ├── src
    │    │    ├── app
    │    │    │    ├── business                    <= business logic for application
    │    │    │    │    ├── common
    │    │    │    │    │    ├── Read.ts           <= common Read method
    │    │    │    │    │    ├── Write.ts          <= common Write method
    │    │    │    │    ├── interfaces
    │    │    │    │    │    ├── IAccountBusiness.ts
    │    │    │    │    │    ├── IAppartmentBusiness.ts
    │    │    │    │    │    ├── ...
    │    │    │    │    ├── AccountBusiness.ts
    │    │    │    │    ├── AppartmentBusiness.ts
    │    │    │    │    ├── ...
    │    │    │    ├── dataAccess
    │    │    │    │    ├── schemas
    │    │    │    │    │    ├── AccountSchema.ts       <= Account Schema for MongoDB
    │    │    │    │    │    ├── AppartmentSchema.ts    <= Appartment Schema for MongoDB
    │    │    │    │    │    ├── ...
    │    │    │    │    ├── DataAccess.ts         <= Connection with MongoDB
    │    │    │    ├── model
    │    │    │    │    ├── interfaces
    │    │    │    │    │    ├── IAccount.ts
    │    │    │    │    │    ├── IAppartment.ts
    │    │    │    │    │    ├── ...
    │    │    │    │    ├── Account.ts
    │    │    │    │    ├── Appartment.ts
    │    │    │    │    ├── ...
    │    │    │    ├── repository
    │    │    │    │    ├── interfaces
    │    │    │    │    │    ├── Read.ts
    │    │    │    │    │    ├── Write.ts
    │    │    │    │    ├── AccountRepository.ts
    │    │    │    │    ├── AppartmentRepository.ts
    │    │    │    │    ├── BaseRepository.ts
    │    │    │    │    ├── HeroRepository.ts
    │    │    │    │    ├── ...
    │    │    ├── config
    │    │    │    ├── constants
    │    │    │    │    ├── constants.ts         <= Constants - mongodb connection string.
    │    │    │    ├── routes
    │    │    │    │    ├── AccountRoutes.ts            <= Account API Routes like get,post,put,delete
    │    │    │    │    ├── AppartmentRoutes.ts         <= Appartment API Routes like get,post,put,delete
    │    │    │    │    ├── Routes.ts                   <= fetching all appliction routes here
    │    │    │    │    ├── ...
    │    │    ├── controller
    │    │    │    ├── interfaces
    │    │    │    │    ├── ReadController.ts
    │    │    │    │    ├── WriteController.ts
    │    │    │    ├── AccountController.ts
    │    │    │    ├── AppartmentController.ts
    │    │    │    ├── BaseController.ts         <= Base Repository controller
    │    │    │    ├── HeroController.ts
    │    │    │    ├── ...
    │    │    ├── server.ts
    │    ├── typings
    │    ├── tsconfig.json
    │    ├── tsconfig.json
    ├── gulpfile.ts                              <= gulp tasks : clean, build, compile, run.
    ├── LICENSE
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    ├── tslint.json
    
```

## Features (Angular2, Express, Gulp, MongoDB, Node)

1.  Angular 2 Quick Start application (Tours of Hero) from https://angular.io/docs/ts/latest/quickstart.html
2.  Added support for Gulp so that js files are moved out of the app folder.
3.  It will create a dist folder where it will place all the js files.
4.  Gulp will monitor for the changes via help of watcher.
5.  Created folder structure for easy access of components, services and models.
6.  Applied tslint for avoiding any typos.
7.  Implemented best practices recomended on the Angular 2 website.
8.  Implemented Express Server to Host API's
9.  Added MongoDB support to communicate our Heroes data to Database
10. Implemented Repository Pattern to communicate with Mongoose.

## Api Document (from MongoDB)

```
1. getAll    http://localhost:3000/api/appartments             <= get all appartments
1. getById   http://localhost:3000/api/appartments/:id         <= get appartment by Id
2. post      http://localhost:3000/api/appartments             <= create appartment
2. put       http://localhost:3000/api/appartments/:id         <= update appartment
2. delete    http://localhost:3000/api/appartments/:id         <= delete appartment

```
## Dependencies

1. Angular 2
2. TypeScript
3. Gulp
4. ExpressJS
5. NodeJS
6. Nodemon
7. TsLint
8. MongoDB

## License

MIT
