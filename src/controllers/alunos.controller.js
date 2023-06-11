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

    },

    // casos de uso

    async getBoletim(req, res) {
        const { id } = req.body;

        const alunos = await knex('alunos').where('id_aluno', id);
        const disciplinas = await knex('disciplinas').select('*');

        let boletim = {
            aluno: alunos[0].nm_aluno
        }

        let disciplinasSalvas = [];

        console.log(disciplinas)

        for (let i = 0; i < disciplinas.length; i++) {
            const e = disciplinas[i];

            const n = await knex('notas')
                    .select('periodo', 'nota')
                    .where('id_disciplina', '=', e.id_disciplina )
                    .andWhere('id_aluno', '=', id);
            
            let diciplina = {
                nome: e.nm_disciplina,
                bimestre1: n.filter(x => x.periodo == "primeiroBimestre").length > 0 ? n.filter(x => x.periodo == "primeiroBimestre")[0].nota : null,
                bimestre2: n.filter(x => x.periodo == "segundoBimestre").length > 0 ? n.filter(x => x.periodo == "segundoBimestre")[0].nota : null,
                bimestre3: n.filter(x => x.periodo == "terceiroBimestre").length > 0 ? n.filter(x => x.periodo == "terceiroBimestre")[0].nota : null,
                bimestre4: n.filter(x => x.periodo == "quartoBimestre").length > 0 ? n.filter(x => x.periodo == "quartoBimestre")[0].nota : null,
                recuperacao: n.filter(x => x.periodo == "recuperacao").length > 0 ? n.filter(x => x.periodo == "recuperacao")[0].nota : null
            }
            console.log(diciplina)
            disciplinasSalvas.push(diciplina);
        }

        boletim.disciplinas = disciplinasSalvas;

        return res.status(200).json(boletim);
    }
}

module.exports = AlunoController;