const app = require('./app');
const port = process.env.PORT || 5000;
require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
  })

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',//SERVE_HOST
        port: 3306, //
        user: process.env.SERVE_USER,//.SERVE_USER
        password: 'qiDK=_SYJ4cjnK.',//.SERVE_PASSWORD
        database: process.env.SERVE_DATA_BASE //SERVE_DATA_BASE
    }
});

const routes = require('./routes/index.routes')
app.use('/api',routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});