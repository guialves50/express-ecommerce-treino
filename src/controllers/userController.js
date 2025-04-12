import user from "../models/User.js";

class UserController {
  static async createUser(req, res) {
    try {
      const userCreated = await user.create(req.body);
      res.status(201).json({
        message: "Usuário criado com sucesso",
        "Novo Usuário": userCreated,
      });
    } catch (error) {
      res.status(500).json({ message: "Falha ao criar usuário" });
    }
  }

  static async showUsers(req, res) {
    try {
      const showAllUsers = await user.find({});
      res.status(200).json(showAllUsers);
    } catch (error) {
      res.status(500).json({ message: "Falha ao listar usuários" });
    }
  }

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

  static async removeUserById(req, res) {
    try {
      await user.findByIdAndDelete(req.params.id, req.body)
      res
      .status(200)
      .json({message: "Usuário deletado com sucesso"})
    } catch (error) {
      res.status(500).json({ message: "Falha ao deletar usuário" });
    }
  }
}

export default UserController;
