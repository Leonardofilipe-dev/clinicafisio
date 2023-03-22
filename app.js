import  express  from "express";
import routes from "./SRC/routes/index.js";
import db from "../clinicafisio/SRC/database/db.js";
import cors from "cors"


db.on("error", console.log.bind(console, "DataBase - Erro de conexão."));
db.once("open", () => {
    console.log("DB connected...");
})
const app = express();

//app.get('/', (req, res) => {res.send('Olá, mundo!')})

  routes(app)
  app.listen(3000, ()=>{
    console.log("Server running at port 3000...");
}); 