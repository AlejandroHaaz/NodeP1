const express= require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

const {getTareas, crearTareas, updateTareas, deleteTareas} = require('../controllers/tareasController')

//versión simplificada
router.route('/').get(protect, getTareas).post(protect, crearTareas)

//Versión extendida
//router.get('/', protect, getTareas)
//router.post('/', protect, crearTareas)

//Versión simplificada
router.route('/:id').delete(protect, deleteTareas).put(protect, updateTareas)

//Versión extendida
//router.put('/:id', protect, updateTareas)
//router.delete('/:id', protect, deleteTareas)

module.exports = router
