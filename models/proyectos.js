const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ProyetoSchema = new Schema({
    nombre : {
        type : String,
        required:true,
        maxLength:100
    }
})