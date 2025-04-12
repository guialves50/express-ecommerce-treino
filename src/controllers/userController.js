import user from "../models/User.js";
import bcrpty from "bcrypt";

class UserController {
  // CRIA UM USUÁRIO
  static async createUser(req, res) {
    try {
      const userBody = req.body;
      const salt = await bcrpty.genSalt(10);
      const hashPassword = await bcrpty.hash(userBody.password, salt);

      await user.create({
        name: userBody.name,
        email: userBody.email,
        phone: userBody.phone,
        cpf: userBody.cpf,
        password: hashPassword,
      });
      res.status(201).json({
        message: "Usuário criado com sucesso",
        "Novo Usuário": {
          name: userBody.name,
          email: userBody.email,
          phone: userBody.phone,
          cpf: userBody.cpf,
        },
      });
    } catch (error) {
      res.status(500).json({ message: "Falha ao criar usuário" });
    }
  }


  // LISTA OS USUÁRIOS
  static async showUsers(req, res) {
    try {
      const showAllUsers = await user.find({});
      res.status(200).json(showAllUsers);
    } catch (error) {
      res.status(500).json({ message: "Falha ao listar usuários" });
    }
  }

  // MOSTRA UM USUÁRIO PELO ID
  static async showUserById(req, res) {
    try {
      const showFind = await user.findById(req.params.id);
      res
        .status(200)
        .json({ message: "Usuário encontrado", usuário: showFind });
    } catch (error) {
      res.status(500).json({ message: "Falha ao encontrar usuário" });
    }
  }

  // ALTERA DADOS DE UM USUÁRIO PELO ID
  static async updateUserById(req, res) {
    try {
      await user.findByIdAndUpdate(req.params.id, req.body);
      res
        .status(200)
        .json({ message: "Usuário atualizado", "Dados atualizados": req.body });
    } catch (error) {
      res.status(500).json({ message: "Falha ao atualizar usuário" });
    }
  }

  // REMOVE UM USUÁRIO PELO ID
  static async removeUserById(req, res) {
    try {
      await user.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Falha ao deletar usuário" });
    }
  }
}

export default UserController;
