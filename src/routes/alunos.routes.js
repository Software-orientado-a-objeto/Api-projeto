const express = require('express');
const router = express.Router();

const AlunoController = require('./../controllers/alunos.controller');


router.get('/BuscarAlunos',AlunoController.buscar)
router.post('/BuscarAlunoPorMatricula',AlunoController.buscarBy)




module.exports = router;