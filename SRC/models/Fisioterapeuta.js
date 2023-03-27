import mongoose from "mongoose";

const FisioterapeutaScrema = new mongoose.Schema({
    nome: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    senha: {
        type: String,
        trim: true,
        required: true
    },
})
const Fisioterapeuta = mongoose.model("Fisioterapeuta", FisioterapeutaScrema)

export default Fisioterapeuta
