import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  cpf: { type: String, required: true, },
  password: { type: String, required: true },
    // adress: adressSchema
}, {versionKey: false});

const user = mongoose.model("user", userSchema)
export default user
