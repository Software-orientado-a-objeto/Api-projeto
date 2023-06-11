const express = require('express');
const router = express.Router();

const AlunoController = require('./../controllers/alunos.controller');


router.get('/BuscarAlunos',AlunoController.buscar)
router.post('/BuscarAlunoPorMatricula',AlunoController.buscarBy)
router.post('/BuscarPorTurma',AlunoController.buscarPorTurma)


router.post('/InserirAluno',AlunoController.inserirAluno);
router.post('/UpdateAluno',AlunoController.updateAluno);
router.post('/DeletarAluno',AlunoController.deletarAluno);

//casos de Uso aluno
router.post('/getBoletim',AlunoController.getBoletim);



module.exports = router;