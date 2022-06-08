/**
  @abstract This is the entry point of the backend application;
 */

import { app } from "./app.js";
import { sequelize } from "./database/config.database.js";
import { saveDataOnStart } from "./database/seeder.database.js";

/**
  @abstract Setup the server
  *
  * -> connect the postgres db; 
  * -> create the database table and initialize its model & schema
  * -> then seed the database with data from an api
  * -> then start the server
  * 
 */

sequelize
  // connect the postgres db
  .authenticate()
  .then(() => console.log("<<<<<Connected Successfully>>>>>"))
  // create database table and initialize its schema
  .then(() => sequelize.sync({ force: true }))
  // save data on start
  .then(() => saveDataOnStart().then(() => {}))
  // Server listen to port
  .then(() =>
    app.listen(process.env.PORT, "127.0.0.1", () => {
      console.log(`Server is running on http://127.0.0.1:${process.env.PORT}`);
    })
  )
  .catch((err) => console.log(`excited due to: ${err.toString()}`));
