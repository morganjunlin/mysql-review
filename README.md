# MySQL Review
> A quick review of connecting a MySQL database to our Express server

### Usage
```
npm install
npm run start
```

This repo is recommended to be used with `MySQL 5.7`.

### Documentation
* [MySQL](https://github.com/mysqljs/mysql): MySQL Github documentation
* [Sequelize](https://sequelize.org/master/manual/getting-started): Sequelize documentation


## Step 1
* Create database `ReviewDB` within MySQL
* Establish connection to database in `database/index.js`

## Step 2
* Create a schema in `database/schema.sql` to describe our `Notebook` table
* Run schema file in terminal

## Step 3
* Create a seeding function in `database/seed.js` to populate table with at least 5 `Things`
* Run seed file in terminal

## Step 4
* Create dbHelper functions in `database/dbHelpers.js`
* Create controller functions in `server/controllers.js`
* Use dbHelper functions within your controller functions

## Step 5
* Test for working functionality via Postman

## OPTIONAL STEP
Refactor the following files to utilize Sequelize ORM:
* `database/index.js`
* `database/dbHelpers.js`
* `server/controllers.js`

