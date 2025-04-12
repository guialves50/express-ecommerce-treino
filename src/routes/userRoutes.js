import { Router } from "express"
import UserController from '../controllers/userController.js';

const routes = Router()

routes.get("/user", UserController.showUsers)
routes.get("/user/:id", UserController.showUserById)
routes.post("/user", UserController.createUser);
routes.put("/user/:id", UserController.updateUserById)
routes.delete("/user/:id", UserController.removeUserById)


export default routes