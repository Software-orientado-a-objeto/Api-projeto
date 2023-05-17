//fazer a controller
const knex = require('knex')({
    client: 'mysql2',
    connection: 'mysql://root:1234@localhost:3306/trabalho_s',
    pool: {
        min: 2,
        max: 10,
    }
});

const aulaController = {

    async buscar(req, res) {
        const aulas = await knex('aula').select('*');
        for (let i = 0; i < aulas.length; i++) {
            const e = aulas[i];
            const professor = await knex('professor').where('id_professor', e.id_professor);
            aulas[i].professor = professor.nm_professor;
            aulas[i].disciplina = await knex('disciplinas').where('id_professor', professor.id_disciplina).nm_disciplina;
            
        }
        return res.json(aulas);
    },

    async buscarByTurmas(req, res) {
        const {id_turmas} = req.body;
        const aulas = await knex('aula').where({ id_turmas: id_turmas });
        return res.json(aulas);
    },
    
    async buscarByProfessor(req, res) {
        const {id_professor} = req.body;
        const aula = await knex('aula').where({ id_professor: id_professor });
        return res.json(aula);
    },

    async inserirAula(req, res) {

        const {aula} = req.body;
        let result = await knex('aula').insert(aula);
        if(!result) return res.status(400).json({msg:'aula does not inserted'});

        return res.status(200).json({msg:'aula inserted'});
    },

    async updateAula(req, res) {
        const {aula} = req.body;
        let result = await knex('aula').where({ id_turmas: aula.id_turmas, id_professor: aula.id_professor }).update(turma)

        if(!result) return res.status(400).json({msg:'aula does not updated'});
        return res.status(200).json({msg:'aula updated'});
    },

    async deletarAula(req, res) {
        const {aula} = req.body;
        const del = await  knex('aula').where({ id_turmas: aula.id_turmas, id_professor: aula.id_professor }).del()

        if(!del) return res.status(400).json({msg:'aula does not exist'});
        return res.status(200).json({msg:'aula deleted'});
    }

}

module.exports = aulaController;
