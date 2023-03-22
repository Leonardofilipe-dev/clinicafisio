import Fisioterapeuta from "../models/Fisioterapeuta.js"


class FisioterapeutaController {
    static async cadastrar(req, res){
        try {
            const { nome, email, senha, relatorio } = req.body
            let nodoFisioterapeuta = new Fisioterapeuta({
                nome, email, senha, relatorio
            })

            const resultado = await nodoFisioterapeuta.save()
            res.json(resultado)
        } catch (error) {
            return res.status(500).json({ error });
        }
        
    }

    static async listar(req, res){
        try  {
            
            let fisioterapeuta = await Fisioterapeuta.find();
            console.log(fisioterapeuta)
            return res.status(200).json(fisioterapeuta);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error });
        }
    }

    static async buscar(req, res){
        try  {
            const id = req.params.id
            const fisioterapeuta = await Fisioterapeuta.findById(id)
            return res.status(200).json(fisioterapeuta)  
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    static async deletar(req, res){
        try  {
            const id = req.params.id
            const fisioterapeutaDeletado = await Fisioterapeuta.findByIdAndDelete(id);
            return res.status(200).json(fisioterapeutaDeletado);
        } catch (error) {
            return res.status(500).json({ error })
        }
    }

    static async atualizar(req, res){
        try  {
            const id = req.params.id
            const { nome, email, senha, relatorio } = req.body
            const fisioterapeutaAtualizado = await Fisioterapeuta.findByIdAndUpdate(id, { nome, email, senha, relatorio })
            return res.status(200).json(fisioterapeutaAtualizado)

        } catch (error) {
            return res.status(500).json({ error })
        }
    }
}

export default FisioterapeutaController

