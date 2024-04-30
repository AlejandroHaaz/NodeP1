const express= require('express')
const router = express.Router()

const {getTareas, crearTareas, updateTareas, deleteTareas} = require('../controllers/tareasController')

//versión simplificada
router.route('/').get(getTareas).post(crearTareas)

//Versión extendida
//router.get('/', getTareas)
//router.post('/', crearTareas)

//Versión simplificada
router.route('/:id').delete(deleteTareas).put(updateTareas)

//Versión extendida
//router.put('/:id', updateTareas)
//router.delete('/:id', deleteTareas)

module.exports = router
