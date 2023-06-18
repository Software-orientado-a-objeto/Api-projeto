const express = require('express');
const router = express.Router();
const AulaController = require('./../controllers/aula.controller');

router.get('/Buscar',AulaController.buscar)
router.post('/buscarPorTurmas',AulaController.buscarByTurmas)
router.post('/BuscarPorProfessor',AulaController.buscarByProfessor)

router.post('/Inserir',AulaController.inserirAula);
router.post('/Update',AulaController.updateAula);
router.post('/Deletar',AulaController.deletarAula);

module.exports = router;