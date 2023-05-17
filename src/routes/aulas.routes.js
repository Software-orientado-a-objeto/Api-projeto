const express = require('express');
const router = express.Router();
const AulaController = require('./../controllers/aula.controller');

router.get('/BuscarNotas',AulaController.buscar)
router.post('/buscarPorTurmas',AulaController.buscarByTurmas)
router.post('/BuscarPorProfessor',AulaController.buscarByProfessor)

router.post('/InserirTurmas',AulaController.inserirAula);
router.post('/UpdateTurmas',AulaController.updateAula);
router.post('/DeletarTurmas',AulaController.deletarAula);

module.exports = router;