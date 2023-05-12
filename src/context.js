const app = require('./app');
const cors = require('cors')
const port = process.env.PORT || 5000;
const AlunoController = require('./controllers/alunos.controller');
require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
  })

const knex = require('knex')({
    client: 'mysql2',
    connection: 'mysql://root:1234@localhost:3306/trabalho_s',
    pool: {
        min: 2,
        max: 10,
    }
});

const routes = require('./routes/index.routes')
app.use('/api',routes);


// app.use(routes)

app.use(cors(
    {
      origin: '*',
    }
  ));
//   app.get('/test',async (req,res) => res.json({teste:'dd'}))
// app.get(('/api/aluno',(req,res) => res.json('')))

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}/`);
});

module.exports = knex;