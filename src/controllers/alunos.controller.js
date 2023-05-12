//fazer a controller
const knex = require('knex')({
    client: 'mysql2',
    connection: 'mysql://root:1234@localhost:3306/trabalho_s',
    pool: {
        min: 2,
        max: 10,
    }
});

const AlunoController = {
    async buscar(req, res) {
        const alunos = await knex('alunos').select('*');
        return res.json(alunos);
    },

    async buscarBy(req, res) {
        const {id} = req.body;
        const alunos = await knex('alunos').where('id_aluno', id);
        return res.json(alunos);
    }
}

module.exports = AlunoController;