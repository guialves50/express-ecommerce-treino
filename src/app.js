import express from "express";
import routes from "./routes/index.js";
import dbConnect from "./config/dbConnection.js";

const connect = await dbConnect()

connect.on("error", (err) => {
  console.error(err)
})

connect.once("open", () => {
  console.log("Database connect sucessful")
})

const app = express();
app.use(express.json())
routes(app)

export default app;
