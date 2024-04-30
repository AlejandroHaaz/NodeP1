const asyncHandler = require('express-async-handler')
const Tarea = require ('../models/tareasModel')

const getTareas = asyncHandler(async (req, res) => {
    
    const tareas = await Tarea.find({user: req.user.id})

    res.status(200).json(tareas)

})

const crearTareas = asyncHandler (async (req, res) => {
    if(!req.body.descripcion){
        res.status(400)
        throw new Error('Por favor teclea una descripción')
    }

    const tarea = await Tarea.create ({
        descripcion : req.body.descripcion,
        user: req.user.id
    })
    
    res.status(201).json(tarea)

})

const updateTareas = asyncHandler (async (req, res) => {
    
   //buscamos la tarea que deseamos modificar
    const tarea = await Tarea.findById(req.params.id)

    if(!tarea){
        res.status(404)
        throw new Error('La tarea no existe')
    }

    const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true}) //true porque queremos que nos devuelva el documento nuevo si fuera false nos devolvería el antiguo, esto se ve en la documentación)

    res.status(200).json(tareaUpdated)
})

const deleteTareas = asyncHandler (async (req, res) => {
        
   //buscamos la tarea que deseamos eliminar
   const tarea = await Tarea.findById(req.params.id)

   if(!tarea){
       res.status(404)
       throw new Error('La tarea no existe')
   }

   //const tareaDeleted = await Tarea.findByIdAndDelete(req.params.id, req.body, {new: true}) //true porque queremos que nos devuelva el documento nuevo si fuera false nos devolvería el antiguo, esto se ve en la documentación)

   await Tarea.deleteOne(tarea)

   //res.status(200).json(tareaDeleted)
   res.status(200).json({id: req.params.id})

})

module.exports = {
    getTareas,
    crearTareas,
    updateTareas,
    deleteTareas
}