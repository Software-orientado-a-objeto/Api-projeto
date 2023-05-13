const express = require('express');
const router = express.Router();

const alunosRoutes = require('./alunos.routes');
const authRoutes = require('./auth.routes');
const professorRoutes = require('./professores.routes');


router.get('/test',async (req,res) => res.json({teste:'dd'}))
router.use('/aluno',alunosRoutes);
router.use('/professor',professorRoutes);
router.use('/auth',authRoutes);
// router.use('/mail')




module.exports = router;