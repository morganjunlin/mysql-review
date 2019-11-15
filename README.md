# MySQL Review
> A quick review of connecting a MySQL database to our Express server

### Usage

```
npm install
npm run start
```

### Documentation
[mysqljs](https://github.com/mysqljs/mysql) - MySQL documentation


## Step 1
* Create database `ReviewDB` within MySQL
* Establish connection to database in `database/index.js`

## Step 2
* Create a schema in `database/schema.sql` to describe our `Something` table
* Run schema file in terminal

## Step 3
* Create a seeding function in `database/seed.js` to populate table with at least 5 `Things`
* Run seed file in terminal

## Step 4
* Create controller functions in `server/controllers.js`
* Create dbHelper functions in `database/dbHelpers.js`
* Use dbHelper functions in your controller functions

## Step 5
* Test via Postman

## OPTIONAL STEP
Refactor model/helper functions to utilize Sequelize

