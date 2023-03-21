import  express  from "express";
import routes from "./SRC/routes/index.js";
import cors from "cors"

const app = express();

app.get('/', (req, res) => {
    res.send('Olá, mundo!')
  })

  routes(app)
  app.listen(3000, ()=>{
    console.log("Server running at port 3000...");
}); 