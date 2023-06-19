const app = require('./app');
const cors = require('cors');
const helmet  = require('helmet');
const port = process.env.PORT || 5000;
const AlunoController = require('./controllers/alunos.controller');
require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
})

app.use(cors());

const routes = require('./routes/index.routes')
app.use('/api', routes);

// app.use(routes)

//   app.get('/test',async (req,res) => res.json({teste:'dd'}))
// app.get(('/api/aluno',(req,res) => res.json('')))

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}/`);
});
