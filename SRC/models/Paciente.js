import mongoose from "mongoose";

const PacienteScrema = new mongoose.Schema({
    nome:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        trim:true,
        required:true
    },
    senha:{
        type: String,
        trim: true,
        required: true
    },
    prontuario:{
        type: String
    },

    Fisioterapeuta:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "fisioterapeuta"
        }
 
})
const Paciente = mongoose.model("Paciente", PacienteScrema)

export default Paciente