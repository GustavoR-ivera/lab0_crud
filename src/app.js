const express = require("express");
const path = require("path");
const morgan = require("morgan");
// const mysql = require('mysql');
const mysql = require("mysql2");
const myConnection = require("express-myconnection");

// import routes

const municipioRoutes = require('./routes/municipio.routes.js');
const personaRoutes = require('./routes/persona');
const viviendaRoutes = require('./routes/vivienda')


//initializations
const app = express();  




//settings
app.set('port', process.env.PORT || 3000);
app.set("view engine", "ejs"); //motor de plantillas
app.set('views', path.join(__dirname, 'views')); //folder donde estan las vistas

//middlewares
// usar morgan para ver las peticiones que llegan al servidor
app.use(morgan('dev'));
//iniciar servidor mysql y configurar bd
app.use(myConnection(mysql, {
    host: 'db-mysql-nyc3-03499-do-user-15730782-0.c.db.ondigitalocean.com',
    user: 'doadmin',
    password: 'AVNS_aKJcJHLJldDGvsun8vN',
    port: 25060,
    database: 'defaultdb'

}, 'single'));
app.use(express.urlencoded({extended: false})); //para recibir datos de formularios


//pagina principal

//routes
app.use('/municipios', municipioRoutes); //rutas modulo personas

app.get('/', (req, res) => {
    res.render('principal_page.ejs');
}); 

//routes
app.use('/personas', personaRoutes); //rutas modulo personas
app.use('/viviendas', viviendaRoutes); //rutas modulo personas





app.listen(app.get('port'), () =>{
    console.log("Server is running on port {app.get('port')}")
});

module.exports = app;