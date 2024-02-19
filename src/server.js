import express from "express";
import { testConnection } from "./database/connection.js";
import categoryRoutes from "./routes/category.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";

const app = express();
const port = 3333;

app.use(express.json());
app.use("/category", categoryRoutes);
app.use("/user", userRoutes);
app.use("/message", messageRoutes);

app.listen(port, () => {
  testConnection();
  console.log(`Server running on port ${port}`);
});
