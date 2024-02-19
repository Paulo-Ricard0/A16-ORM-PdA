import { Message } from "../entities/Message.entity.js";
import { sequelize as database } from "../database/connection.js";

class MessageController {
  createMessage = async (req, res) => {
    await database.sync();
    const newMessage = await Message.create(req.body);
    return res.status(201).json({
      status: "Mensagem criada com sucesso!",
      message: newMessage,
    });
  };

  getAllMessages = async (req, res) => {
    const messages = await Message.findAll();
    return res.json(messages);
  };
}

export default new MessageController();
