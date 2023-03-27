import Atendimento from "../models/Atendimento.js";

class AtendimentoController {
    static async cadastrar(req, res) {
        try {
            const { fisioterapeutaId, pacienteId, observacao } = req.body
            let novoAtendimento = new Atendimento({
                fisioterapeutaId, pacienteId, observacao
            })

            const resultado = await novoAtendimento.save()
            res.json(resultado)
        } catch (error) {
            return res.status(500).json({ error });
        }

    }

    static async listar(req, res) {
        try {

            let atendimento = await Atendimento.find()
                .populate('fisioterapeutaId')
                .populate('pacienteId');
            console.log(atendimento)
            return res.status(200).json(atendimento);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error });
        }
    }

    static async buscar(req, res) {
        try {
            const id = req.params.id
            const atendimento = await Atendimento.findById(id)
                .populate('fisioterapeutaId')
                .populate('pacienteId')
            return res.status(200).json(atendimento)
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    static async deletar(req, res) {
        try {
            const id = req.params.id
            const atendimentoDeletado = await Atendimento.findByIdAndDelete(id);
            return res.status(200).json(atendimentoDeletado);
        } catch (error) {
            return res.status(500).json({ error })
        }
    }

    static async atualizar(req, res) {
        try {
            const id = req.params.id
            const { fisioterapeutaId, pacienteId, observacao } = req.body
            const atendimentoAtualizado = await Atendimento.findByIdAndUpdate(id,
                { fisioterapeutaId, pacienteId, observacao })
            return res.status(200).json(atendimentoAtualizado)

        } catch (error) {
            return res.status(500).json({ error })
        }
    }
}

export default AtendimentoController