import mongoose from "mongoose";

const AtendimentoSchema = new mongoose.Schema({
  fisioterapeutaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fisioterapeuta'
  },
  pacienteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Paciente'
  },
  observacao: {
    type: String,
  }
});

const Atendimento = mongoose.model('Atendimento', AtendimentoSchema);

export default Atendimento;
