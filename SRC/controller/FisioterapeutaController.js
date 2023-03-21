import Fisioterapeuta from "../models/Fisioterapeuta.js"


class FisioterapeutaController {
    static async cadastrar(req, res){
        try {
            res.send("Olá")  
        } catch (error) {
            console.log(error)
        }
        
    }

    static async listar(req, res){
        try  {
            res.send("Olá")  
        } catch (error) {
            console.log(error)
        }
    }

    static async buscar(req, res){
        try  {
            res.send("Olá")  
        } catch (error) {
            console.log(error)
        }
    }

    static async deletar(req, res){
        try  {
            res.send("Olá")  
        } catch (error) {
            console.log(error)
        }
    }

    static async atualizar(req, res){
        try  {
            res.send("Olá")  
        } catch (error) {
            console.log(error)
        }
    }
}

export default FisioterapeutaController

