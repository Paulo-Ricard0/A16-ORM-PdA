import { User } from "../entities/User.entity.js";
import { sequelize as database } from "../database/connection.js";

class UserController {
  registerUser = async (req, res) => {
    await database.sync();
    const newUser = await User.create(req.body);
    return res.status(201).json({
      message: "Registro criado com sucesso!",
      user: newUser,
    });
  };

  getAllUsers = async (req, res) => {
    const users = await User.findAll();
    return res.json(users);
  };

  getUserById = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    return res.json(user);
  };
}

export default new UserController();
