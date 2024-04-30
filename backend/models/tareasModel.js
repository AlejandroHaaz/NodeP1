const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    descripcion: {
        type: String,
        required: [true, "Por favor teclea una descripción"]
    }
}, {
    timestamps: true //cada que haga un documento (registro) mongoose podrá poner la fecha de creación y modificación
})

module.exports = mongoose.model('Tarea', tareaSchema) //cuando creamos un modelo tenemos que nombrarlo en singular y con letra capital (esta es la conveción debido a mongoose)
