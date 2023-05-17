const express = require('express');
const router = express.Router();

const alunosRoutes = require('./alunos.routes');
const authRoutes = require('./auth.routes');
const professorRoutes = require('./professores.routes');
const disciplinasRoutes = require('./diciplinas.routes');
const notasRoutes = require('./notas.routes');
const turmasRoutes = require('./turmas.routes');
const aulasRoutes = require('./aulas.routes');

router.get('/test',async (req,res) => res.json({teste:'dd'}))
router.use('/aluno',alunosRoutes);
router.use('/professor',professorRoutes);
router.use('/disciplinas',disciplinasRoutes);
router.use('/notas',notasRoutes);

router.use('/turmas',turmasRoutes);
router.use('/aulas',aulasRoutes);

router.use('/auth',authRoutes);

module.exports = router;