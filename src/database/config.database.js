import { Sequelize } from "sequelize";
import config from "../config.js";

/**
  @abstract Initialize databse config with sequelize;
 */

export const sequelize = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port,
    dialect: config.db.dialect,
    logging: config.db.logging,
  }
);
