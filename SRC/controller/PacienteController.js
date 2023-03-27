import Paciente from "../models/Paciente.js"


class PacienteController {
    static async cadastrar(req, res) {
        try {
            const { nome, dataNascimento, prontuario } = req.body
            let novoPaciente = new Paciente({
                nome, dataNascimento, prontuario
            })

            const resultado = await novoPaciente.save()
            res.json(resultado)
        } catch (error) {
            return res.status(500).json({ error });
        }

    }

    static async listar(req, res) {
        try {

            let paciente = await Paciente.find();
            console.log(paciente)
            return res.status(200).json(paciente);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error });
        }
    }

    static async buscar(req, res) {
        try {
            const id = req.params.id
            const paciente = await Paciente.findById(id)
            return res.status(200).json(paciente)
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    static async deletar(req, res) {
        try {
            const id = req.params.id
            const pacienteDeletado = await Paciente.findByIdAndDelete(id);
            return res.status(200).json(pacienteDeletado);
        } catch (error) {
            return res.status(500).json({ error })
        }
    }

    static async atualizar(req, res) {
        try {
            const id = req.params.id
            const { nome, dataNascimento, prontuario } = req.body
            const pacienteAtualizado = await Paciente.findByIdAndUpdate(id,
                { nome, dataNascimento, prontuario })
            return res.status(200).json(pacienteAtualizado)

        } catch (error) {
            return res.status(500).json({ error })
        }
    }
}

export default PacienteController