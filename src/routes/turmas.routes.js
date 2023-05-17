const express = require('express');
const router = express.Router();
const TurmasController = require('./../controllers/turmas.controller');


router.get('/BuscarTurmas',TurmasController.buscar)
router.post('/buscarId',TurmasController.buscarBy)

router.post('/InserirTurma',TurmasController.inserirTurmas);
router.post('/UpdateTurma',TurmasController.updateTurma);
router.post('/DeletarTurma',TurmasController.deletarTurma);


module.exports = router;