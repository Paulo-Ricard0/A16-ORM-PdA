import { CategoryEntity } from "../entities/Category.entity.js";
import { sequelize as database } from "../database/connection.js";

class CategoryController {
  createCategory = async (req, res) => {
    await database.sync();
    const newCategory = await CategoryEntity.create(req.body);
    return res.status(201).json({
      message: "Categoria criada com sucesso!",
      category: newCategory,
    });
  };

  getAllCategories = async (req, res) => {
    const categories = await CategoryEntity.findAll();
    return res.json(categories);
  };

  getCategoryById = async (req, res) => {
    const category = await CategoryEntity.findByPk(req.params.id);
    return res.json(category);
  };
}

export default new CategoryController();
