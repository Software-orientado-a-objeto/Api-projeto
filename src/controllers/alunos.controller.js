//fazer a controller
const knex = require('knex');

const AlunoController = {
    async buscar(req, res) {
        // const alunos = await knex('alunos').select('*');
        const alunos = await knex.select('*').from('alunos')
        return res.json(alunos);
    }
}

module.exports = AlunoController;