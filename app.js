import  express  from "express";
import cors from "cors"

const app = express();

app.get('/', (req, res) => {
    res.send('Olá, mundo!')
  })

  app.listen(5000, ()=>{
    console.log("Server running at port 5000...");
}); 