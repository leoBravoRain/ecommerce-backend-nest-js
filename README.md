# Ecommerce backend demo app with Nest Js🚀

This is a demo projet I developed as part of my personal portfolio.

This is an ecommerce API demo for serve the ecommerce frontend app.

This API contains:

1) Endpoint to get all products of the ecommerce.
2) Endpoint to get product details (based on _product_id_)
3) Endpoint to save a sale. This sale is created from a Client model and a list of Products from a cart sent from the frontend app.
4) Based on the previous endpoints, it contains models for _Product_, _Client_ and _Sale_.

As this is a demo app, it does not contain all the expected functionallities an ecommerce app should have.

## Full-stack project

This is part of a full-stack project, so this backend app is connected to a frontend app developed as part of personal portfolio too. So if you want to run this app locally, you should run the frontend at the same time.

As this is an API, it can be consulted by any client (like POSTMAN, curl, etc). But it makes sense to connect with its frontend app.

> [Frontend project](https://github.com/leoBravoRain/ecommerce-frontend)

## Backend clarification

I developed the same backend with other technology, Express. I developed this project just to use Nest Js.

> [Backend project with Express](https://github.com/leoBravoRain/ecommerce-backend)


## Requisites 🔌

- **Node Versión**: v18.14.0
- **NPM Versión**: 9.3.1

_Remember_: This app is connected to other frontend app, so if you want to run locally, you should run this frontend app too.

## Setup 🚀

**Environment variables**
- Create .env file at the root directory (same as README.me) with the following variable `DATABASE_URL` (This app uses MongoDB as Database and Prisma as ODM).

If you want to run this project locally, I recommend set `DATABASE_URL` as the direction to your MongoDB. For testing, I recommend to use [MongoDB Atlas](https://www.mongodb.com/atlas/database), because it has the setup required built-in for work correctly with MongoDB and Prisma.


**Run locally**

- _Install dependencies_: `npm run install`
- _Run locally_: `npm run start:dev`

## Highlitghts about the technology used in this project 📋

 - This is a Node Js app using Nest Js as framework.
 - This app uses MongoDB as Database and Prisma as ODM. 
 - It contains a main file (_app.module.ts_) as a module to import all other modules used in the app.
 - _prisma/_ folder at the root level, contains the schema for define the model entities, using Prisma.
 - At the _/src/_ level, there are a folder for every module asociated with entities: _client_, _product_ and _sale_. Each has a module, controller (to manage request) and service (to do business logic: request to Data Base and logic associated).
- The _/src/prisma_ module define the setup to use Prisma as service in other modules.
- _/dto/_ subfolders contains DTO definition for validate the creation of entities in DB. It uses validators as decorators. For example, it uses _@IsString()_ decorator to validate that property has to be of type _string_.


