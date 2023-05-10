const express = require('express');
const router = express.Router();

const alunosRoutes = require('./alunos.routes');


router.use('/aluno',alunosRoutes);
// router.use('/login');
// router.use('/mail')




module.exports = router;