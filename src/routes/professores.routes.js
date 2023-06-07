const express = require('express');
const router = express.Router();

const ProfessorController = require('./../controllers/professor.controller');

router.get('/BuscarProfessor',ProfessorController.buscar)
router.post('/BuscarProfessorPorMatricula',ProfessorController.buscarBy)
router.post('/BuscarPorDisciplina',ProfessorController.buscarPorDisciplina)


router.post('/InserirProfessor',ProfessorController.inserirProfessor);
router.post('/UpdateProfessor',ProfessorController.updateProfessor);
router.post('/DeletarProfessor',ProfessorController.deletarProfessor);

//casos de Uso professor
router.post('/buscarTumasDaAula',ProfessorController.buscarTumasDaAula);
router.post('/salvarNotaAluno',ProfessorController.salvarNotaAluno);



module.exports = router;