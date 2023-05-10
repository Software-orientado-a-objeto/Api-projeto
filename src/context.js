const app = require('./app');
const cors = require('cors')
const port = process.env.PORT || 5000;
const AlunoController = require('./controllers/alunos.controller');
require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
  })

app.use(cors())

const knex = require('knex')({
    client: 'mysql',
    version:'8.0.33',
    connection: {
        host: '127.0.0.1',//SERVE_HOST
        port: 3306, //
        user: 'root',//.SERVE_USER process.env.SERVE_USER
        password: 'qiDK=_SYJ4cjnK.',//.SERVE_PASSWORD
        database: 'trabalho_s' //SERVE_DATA_BASE process.env.SERVE_DATA_BASE
    }
});

const routes = require('./routes/index.routes')
// app.use('/api',routes);
app.get(('/api/aluno',AlunoController))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});