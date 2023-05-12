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
    },

    async buscarPorTurma(req, res) {
        const {id} = req.body;
        const alunos = await knex('alunos').where('id_aluno', id);
        return res.json(alunos);
    },

    async inserirAluno(req, res) {
        const {aluno} = req.body;
        let result = await knex('alunos').insert(aluno);

        if(!result) return res.status(400).json({msg:'user does not inserted'});

        return res.status(200).json({msg:'user inserted'});

    },

    async updateAluno(req, res) {
        const {aluno} = req.body;

        let result = await knex('alunos').where({ id_aluno: aluno.id_aluno }).update(aluno)

        if(!result) return res.status(400).json({msg:'user does not updated'});

        return res.status(200).json({msg:'user updated'});

    },

    async deletarAluno(req, res) {
        const {id} = req.body;
        const aluno = await  knex('alunos').where('id_aluno', id).del()

        if(!aluno) return res.status(400).json({msg:'user does not exist'});

        return res.status(200).json({msg:'user deleted'});

    }
}

module.exports = AlunoController;