import express from "express";
import routes from "./SRC/routes/index.js";
import db from "../clinicafisio/SRC/database/db.js";
import cors from "cors"
import HandleError from "./SRC/middlewares/handleError.js";

db.on("error", console.log.bind(console, "DataBase - Erro de conexão."));
db.once("open", () => {
  console.log("DB connected...");
})
const app = express();

const corsOptions = {
  exposedHeaders: ['token']
}
app.use(cors(corsOptions))

routes(app)
app.use(HandleError)
app.listen(3000, () => {
  console.log("Server running at port 3000...");
}); 