import { DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

export const CategoryEntity = database.define("categories", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

export default CategoryEntity;
