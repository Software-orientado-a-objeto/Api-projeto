const express = require('express');
const router = express.Router();

const DisciplinasController = require('./../controllers/diciplinas.controller');

router.get('/BuscarDisciplinas',DisciplinasController.buscar)
router.post('/BuscarDisciplinasPorId',DisciplinasController.buscarBy)


router.post('/InserirDisciplinas',DisciplinasController.inserirdisciplina);
router.post('/UpdateDisciplinas',DisciplinasController.updatedisciplina);
router.post('/DeletarDisciplinas',DisciplinasController.deletardisciplina);


module.exports = router;