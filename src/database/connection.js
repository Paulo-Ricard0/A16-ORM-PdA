import { Sequelize } from "sequelize";

const sequelize = new Sequelize("pda", "sa", "1q2w#", {
  host: "localhost",
  dialect: "mssql",
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { sequelize, testConnection };
