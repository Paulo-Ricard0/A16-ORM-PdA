import { DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

export const Message = database.define("messages", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  senderId: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  receiverId: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});

export default Message;
