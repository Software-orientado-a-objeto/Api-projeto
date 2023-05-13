const express = require('express');
const router = express.Router();
const NotasController = require('./../controllers/notas.controller');


router.get('/BuscarNotas',NotasController.buscar)
router.post('/buscarPorAluno',NotasController.buscarBy)
router.post('/BuscarPorTurma',NotasController.buscarPorTurma)


router.post('/InserirNota',NotasController.inserirNotas);
router.post('/UpdateNota',NotasController.updateNotas);
router.post('/DeletarNota',NotasController.deletarNotas);


module.exports = router;