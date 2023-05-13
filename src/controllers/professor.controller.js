const knex = require('knex')({
    client: 'mysql2',
    connection: 'mysql://root:1234@localhost:3306/trabalho_s',
    pool: {
        min: 2,
        max: 10,
    }
});


const ProfessorController = {

    async buscar(req, res) {
        const professor = await knex('professor').select('*');
        return res.json(professor);
    },

    async buscarBy(req, res) {
        const {id} = req.body;
        const professor = await knex('professor').where('id_professor', id);
        return res.json(professor);
    },

    async buscarPorDisciplina(req, res) {
        const {id} = req.body;
        const professor = await knex('professor').where('id_disciplina', id);
        return res.json(professor);
    },

    async inserirProfessor(req, res) {
        const {professor} = req.body;
        let result = await knex('professor').insert(professor);

        if(!result) return res.status(400).json({msg:'user does not inserted'});

        return res.status(200).json({msg:'user inserted'});

    },
    async updateProfessor(req, res) {
        const {professor} = req.body;

        let result = await knex('professor').where({ id_professor: professor.id_professor }).update(professor)

        if(!result) return res.status(400).json({msg:'user does not updated'});

        return res.status(200).json({msg:'user updated'});

    },
    async deletarProfessor(req, res) {
        const {id} = req.body;
        const professor = await  knex('professor').where('id_professor', id).del()

        if(!professor) return res.status(400).json({msg:'user does not exist'});

        return res.status(200).json({msg:'user deleted'});
    }
}

module.exports = ProfessorController;
