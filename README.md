# nodejs-boilerplate-sequelize
Basic boilerplate for Node.js server application with Sequelize ORM and PostgreSQL DB 
# Pre-requisites
1) Node.js latest version with npm & npx
2) PostgreSQL v13+
# Installing Dependencies
1) To install the boilerplate globally, run 
```bash
npm i -g nodejs-boilerplate-sequelize
```
2) You can use the following command in any directory to generate the project folder structure
```bash
npx generate-boilerplate app-name
```
3) Create a ".env" file in the project's root and copy the contents of "example.env" file and replace the values.
4) To start the server locally, run
```bash
npm start
```
5) To start the server in development mode, run
```bash
npm restart
```
# Project Folder Structure
1) Starting point of the application is "server.js". The command "npm start" runs "node server.js" script.
2) "server.js" defines the creation of application server using in-built "http" module. It takes Port Number from the "PORT" variable in .env file and binds it to the server.
3) The application uses "express" framework as defined in "app.js" file. It also defines custom functions to be used globally and middlewares as well.
4) PostgreSQL DB's connection string is written in "data/models/index.js". It takes Host, DB name, Username, Password and Dialect values from the variables in .env file.
5) The directory structure is as follows:
```bash
   |
   |--controllers
   |       |--userController
   |       
   |--data
   |       |--config
   |       |--migrations
   |       |--models
   |       |--seeders
   |
   |--routes
   |       |--user_routes
   |
   |--services
   |       |--userServices
   |
   |--.sequelizerc
   |
   |--app.js
   |
   |--package.json
   |
   |--server.js
 ```
           
6) Schemas for "users" model is defined under "models" directory.
# Migrations
1) A model and migration file can be generated simultaneously via the following command.
```bash
npx sequelize-cli model:generate --name <ModelName> --attributes <FirstAttribute>:<dataType>,<SecondAttribute>:<dataType> ...
```
2) DB migrations can be run via
```bash
npx sequelize-cli db:migrate
```
3) DB migrations can be reverted via
- For undoing latest migration
```bash
npx sequelize-cli db:migrate:undo
```
- For undoing all migrations upto specific file
```bash
npx sequelize-cli db:migrate:undo:all --to <XXXXXXXXXXXXXX-filename>.js
```
# Seeding
1) A seed file can be generated via
```bash
npx sequelize-cli seed:generate --name <SeedName>
```
2) DB seeding can be done via
```bash
npx sequelize-cli db:seed:all
```
3) DB Seeding can be reverted via
- For undoing latest seed
```bash
npx sequelize-cli db:seed:undo
```
- For undoing particular seed
```bash
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
```
- For undoing all seeds
```bash
npx sequelize-cli db:seed:undo:all
```