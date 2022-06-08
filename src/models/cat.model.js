/**
  @abstract This is a Sequelize based model -> inherits from the sequelize model;
  @abstract It describes it's schematic representation;
  @abstract And also exposes it's methods in a sequelize manner (all are static members);
 */

import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/config.database.js";

export default class CatModel extends Model {}
CatModel.init(
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "cat",
    timestamps: true,
  }
);
