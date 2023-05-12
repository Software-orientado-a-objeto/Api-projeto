const express = require('express');
const router = express.Router();

const alunosRoutes = require('./alunos.routes');


router.get('/test',async (req,res) => res.json({teste:'dd'}))
router.use('/aluno',alunosRoutes);
// router.use('/login');
// router.use('/mail')




module.exports = router;